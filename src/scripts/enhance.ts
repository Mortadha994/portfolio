// Progressive enhancement only. Everything here fails safe: if the module
// never loads, the page still reads correctly — the CSS reveal fallback in
// Base.astro has already shown the content.
import { scroll, animate, inView } from 'motion';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  // 1. Reading-progress bar. scroll() binds straight to the browser's
  //    ScrollTimeline where supported, so this costs no scroll handler.
  const bar = document.getElementById('progress');
  if (bar) {
    scroll(animate(bar, { scaleX: [0, 1] }, { ease: 'linear' }));
  }

  // 2. The hero blobs drift against the scroll — slower than the page, so
  //    the header keeps a little depth as you leave it.
  const hero = document.getElementById('top');
  const blobs = document.querySelectorAll<HTMLElement>('.blob');
  if (hero && blobs.length) {
    blobs.forEach((blob, i) => {
      scroll(animate(blob, { y: [0, (i + 1) * 90] }, { ease: 'linear' }), {
        target: hero,
        offset: ['start start', 'end start'],
      });
    });
  }

  // 3. Screenshot strips lift slightly as their card crosses the viewport.
  document.querySelectorAll<HTMLElement>('.strip').forEach((strip) => {
    scroll(animate(strip, { y: [28, -28] }, { ease: 'linear' }), {
      target: strip,
      offset: ['start end', 'end start'],
    });
  });

  // 4. Stack chips flick in one by one the first time a card is seen.
  //    inView fires once, so this never replays on scroll-up.
  inView(
    '[data-chips]',
    (el) => {
      const chips = el.querySelectorAll('.chip');
      animate(
        chips,
        { opacity: [0, 1], transform: ['translateY(6px)', 'none'] },
        { duration: 0.32, delay: (i: number) => i * 0.028, ease: [0.22, 1, 0.36, 1] }
      );
    },
    { amount: 0.3 }
  );
}
