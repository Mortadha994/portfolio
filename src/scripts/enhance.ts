// Progressive enhancement only. Everything here fails safe: if the module
// never loads, the page still reads correctly — the CSS reveal fallback in
// Base.astro has already shown the content.
//
// Built on Motion's scroll() pattern: scroll(animate(...), { target, offset }).
// Where the browser supports ScrollTimeline, Motion hands the animation over
// to it, so none of this runs a scroll handler on the main thread.
import { scroll, animate, inView } from 'motion';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Nothing below is required for the page to be readable.
if (!reduced) {
  const linear = { ease: 'linear' } as const;

  // ---- Reading progress ------------------------------------------------
  const bar = document.getElementById('progress');
  if (bar) scroll(animate(bar, { scaleX: [0, 1] }, linear));

  // ---- Hero: blobs drift, content settles ------------------------------
  const hero = document.getElementById('top');
  if (hero) {
    document.querySelectorAll<HTMLElement>('.blob').forEach((blob, i) => {
      scroll(animate(blob, { y: [0, (i + 1) * 110] }, linear), {
        target: hero,
        offset: ['start start', 'end start'],
      });
    });

    // The hero text leaves a little faster than the page, so the section
    // below feels like it slides over it rather than following it.
    const copy = hero.querySelector<HTMLElement>('.stagger');
    if (copy) {
      scroll(animate(copy, { y: [0, -60], opacity: [1, 0.35] }, linear), {
        target: hero,
        offset: ['start start', 'end start'],
      });
    }
  }

  // ---- Section headings drift against the scroll -----------------------
  // Same shape as Motion's parallax example: track the element's own
  // progress through the viewport and move it on a linear ease.
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    scroll(animate(el, { y: [40, -40] }, linear), {
      target: el,
      offset: ['start end', 'end start'],
    });
  });

  // ---- Project cards gain depth as they pass ---------------------------
  // Scale only, and never below 0.985 — text stays crisp and legible the
  // whole way through. Opacity is deliberately left alone so nothing is
  // ever hard to read mid-scroll.
  document.querySelectorAll<HTMLElement>('article[id]').forEach((card) => {
    scroll(animate(card, { '--card-scale': [0.985, 1, 1, 0.985] } as any, linear), {
      target: card,
      offset: ['start end', 'start 70%', 'end 30%', 'end start'],
    });
  });

  // ---- Screenshot strips drift on their own ----------------------------
  // A steady wind: the track loops forever at a low speed, whether or not the
  // page is scrolling. It eases to a halt under the mouse and only runs while
  // its card is on screen. The shots are cloned once so the loop has no seam;
  // clones are hidden from assistive tech.
  const SPEED = 38; // px per second

  document.querySelectorAll<HTMLElement>('.strip').forEach((viewport) => {
    const track = viewport.querySelector<HTMLElement>('.track');
    if (!track) return;
    const originals = Array.from(track.children) as HTMLElement[];
    if (originals.length < 2) return;

    originals.forEach((li) => {
      const clone = li.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelector('img')?.setAttribute('loading', 'eager');
      clone.querySelector('[role=button]')?.removeAttribute('tabindex');
      track.appendChild(clone);
    });
    track.dataset.looped = '1';

    viewport.style.overflowX = 'hidden';
    viewport.scrollLeft = 0;

    let x = 0;
    let loop = 0;
    let speed = 1;
    let target = 1;
    let visible = false;
    let last = 0;

    const measure = () => {
      const clone = track.children[originals.length] as HTMLElement;
      loop = clone.offsetLeft - originals[0].offsetLeft;
    };
    measure();
    addEventListener('resize', measure);

    viewport.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') target = 0;
    });
    viewport.addEventListener('pointerleave', () => (target = 1));

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      speed += (target - speed) * Math.min(dt * 6, 1);
      if (loop > 0) {
        x = (x + SPEED * speed * dt) % loop;
        track.style.setProperty('--track-x', `${-x}px`);
      }
      if (visible) requestAnimationFrame(tick);
    };

    new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was) {
        last = performance.now();
        requestAnimationFrame(tick);
      }
    }).observe(viewport);
  });

  // ---- Stack chips flick in once per card ------------------------------
  inView(
    '[data-chips]',
    (el) => {
      animate(
        el.querySelectorAll('.chip'),
        { opacity: [0, 1], transform: ['translateY(6px)', 'none'] },
        { duration: 0.32, delay: (i: number) => i * 0.028, ease: [0.22, 1, 0.36, 1] }
      );
    },
    { amount: 0.3 }
  );

  // ---- Hero stats count up the first time they are seen ----------------
  inView(
    '[data-count]',
    (el) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      animate(0, target, {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          el.textContent = String(Math.round(v));
        },
      });
    },
    { amount: 0.6 }
  );
}

// ---- Lightbox ------------------------------------------------------------
// Click (or Enter) on any screenshot to see it full size. Arrow keys or the
// buttons step through that project's shots; Esc or a click outside closes.
{
  const dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-label', 'Screenshot viewer');
  dlg.innerHTML =
    '<button type="button" class="lb-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lb-nav lb-prev" aria-label="Previous">&#8592;</button>' +
    '<figure><img alt="" /><figcaption></figcaption></figure>' +
    '<button type="button" class="lb-nav lb-next" aria-label="Next">&#8594;</button>';
  document.body.appendChild(dlg);

  const big = dlg.querySelector('img') as HTMLImageElement;
  const cap = dlg.querySelector('figcaption') as HTMLElement;
  let shots: HTMLElement[] = [];
  let at = 0;

  const show = (i: number) => {
    at = (i + shots.length) % shots.length;
    const li = shots[at];
    const img = li.querySelector('img') as HTMLImageElement;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    cap.replaceChildren(...Array.from(li.querySelectorAll('p > *')).map((n) => n.cloneNode(true)));
  };

  const open = (li: HTMLElement) => {
    const track = li.parentElement as HTMLElement;
    const all = Array.from(track.children) as HTMLElement[];
    const n = track.dataset.looped ? all.length / 2 : all.length;
    shots = all.slice(0, n);
    show(all.indexOf(li) % n);
    dlg.querySelectorAll<HTMLElement>('.lb-nav').forEach((b) => (b.hidden = n < 2));
    dlg.showModal();
  };

  document.querySelectorAll<HTMLElement>('.shot').forEach((li) => {
    const img = li.querySelector('img');
    const box = img?.parentElement;
    if (!img || !box || li.getAttribute('aria-hidden')) return;
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '0');
    box.setAttribute('aria-label', img.alt || 'Open screenshot');
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(li);
      }
    });
  });

  // Delegated so the cloned shots open too.
  addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest?.('.shot') as HTMLElement | null;
    if (li && li.closest('.track')) open(li);
  });

  dlg.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('.lb-prev')) show(at - 1);
    else if (t.closest('.lb-next')) show(at + 1);
    else if (t !== big) dlg.close();
  });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(at - 1);
    if (e.key === 'ArrowRight') show(at + 1);
  });
}
