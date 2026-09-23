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

  // ---- Screenshots: each shot drifts at its own rate -------------------
  document.querySelectorAll<HTMLElement>('.strip').forEach((strip) => {
    strip.querySelectorAll<HTMLElement>('.shot img').forEach((img, i) => {
      const d = 18 + i * 4;
      scroll(animate(img, { '--shot-y': [`${d}px`, `${-d}px`] } as any, linear), {
        target: strip,
        offset: ['start end', 'end start'],
      });
    });
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
