/* Dayanne Moura v8 — no libraries. Native scroll; motion that explains, never pins. */
(() => {
  window.__dm = 1; // tells the head failsafe that this script is running
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const html = document.documentElement;
  const motion = html.classList.contains('js'); // false under prefers-reduced-motion
  const clamp = v => Math.min(1, Math.max(0, v));
  const WA = 'https://wa.me/556184298360';

  /* WhatsApp links carry a ready message */
  $$('[data-wa]').forEach(a => { a.href = `${WA}?text=${encodeURIComponent(a.dataset.wa)}`; });
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Prepare the DOM for motion ---------- */
  if (motion) {
    // key word of every section title gets a hand-drawn underline
    const stroke = '<svg class="u-stroke" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M2 8C42 3 92 2 132 5s48 4 66-1"/></svg>';
    $$('main h2 em').forEach(em => em.insertAdjacentHTML('beforeend', stroke));

    // titles are split into words (elements such as <em> stay whole) so each can rise from a mask
    $$('main h1, main h2').forEach(el => {
      el.setAttribute('aria-label', el.textContent.trim().replace(/\s+/g, ' '));
      let i = 0;
      const wrap = node => {
        const w = document.createElement('span'), wi = document.createElement('span');
        w.className = 'w'; wi.className = 'wi'; wi.style.setProperty('--w', i++);
        wi.appendChild(node); w.appendChild(wi); return w;
      };
      [...el.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(t => { if (t) frag.appendChild(/^\s+$/.test(t) ? document.createTextNode(' ') : wrap(document.createTextNode(t))); });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) {
          const block = n.classList.contains('script');
          const w = wrap(n.cloneNode(true)); if (block) w.classList.add('w--block');
          n.replaceWith(w);
        }
      });
      (el.closest('[data-reveal], [data-hero]') || el).classList.add('has-split');
    });

    // step chips cascade in order
    $$('.chips').forEach(ul => [...ul.children].forEach((li, i) => li.style.setProperty('--c', i)));
  }

  /* ---------- Loader: first visit of the session only; leaves as soon as the hero is ready (max 2.2s) ---------- */
  const loader = $('#loader');
  const ready = () => html.classList.add('is-ready');
  if (loader && getComputedStyle(loader).display !== 'none') {
    html.classList.add('is-loading');
    const img = $('.hero__frame img');
    const imgP = img.complete ? Promise.resolve() : new Promise(r => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); });
    const fontsP = document.fonts ? document.fonts.ready : Promise.resolve();
    const wait = ms => new Promise(r => setTimeout(r, ms));
    Promise.race([Promise.all([imgP, fontsP, wait(1500)]), wait(2200)]).then(() => {
      loader.classList.add('is-out');
      setTimeout(() => { html.classList.remove('is-loading'); ready(); }, 350);
      setTimeout(() => { loader.style.display = 'none'; }, 1300);
    });
  } else {
    requestAnimationFrame(ready);
  }

  /* ---------- Before / after sliders (+ one sweep that shows they can be dragged) ---------- */
  $$('.ba').forEach(ba => {
    const input = $('input', ba);
    const set = v => { ba.style.setProperty('--pos', v + '%'); input.value = v; };
    input.addEventListener('input', () => { ba.dataset.touched = '1'; set(+input.value); });
    ba.addEventListener('pointerdown', () => { ba.dataset.touched = '1'; });
    ba._sweep = () => {
      const keys = [[0, 50], [0.35, 74], [0.75, 28], [1, 50]], t0 = performance.now(), dur = 2400;
      const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const step = now => {
        if (ba.dataset.touched) return;
        const t = clamp((now - t0) / dur);
        let k = 1; while (k < keys.length - 1 && t > keys[k][0]) k++;
        const [ta, va] = keys[k - 1], [tb, vb] = keys[k];
        set(Math.round(va + (vb - va) * ease(clamp((t - ta) / (tb - ta)))));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
  });

  /* ---------- Reveal: each block animates in once ---------- */
  const hasIO = 'IntersectionObserver' in window;
  const io = hasIO && new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('is-in');
    io.unobserve(el);
    const ba = motion && el.matches('.ba-card') && $('.ba', el);
    if (ba) setTimeout(ba._sweep, 600);
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  $$('[data-reveal]').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

  /* ---------- Timeline: the gold thread fills with the scroll and lights each step it reaches ---------- */
  const tl = $('#tl'), fill = tl && $('.tl__fill', tl), steps = tl ? $$('.tl-step', tl) : [];
  const LINE = 0.62; // the thread's tip sits at 62% of the viewport height

  /* ---------- Scroll-linked values (one rAF, only for what is on screen) ---------- */
  const nav = $('#nav'), fab = $('#fab'), hero = $('.hero'), bar = $('#progress');
  const live = new Set();
  let lastY = scrollY, ticking = false, menuOpen = false;
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
  if (hasIO && motion) {
    // recompute whenever something enters or leaves, so a jump (menu click) never leaves a stale value
    const sio = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? live.add(e.target) : live.delete(e.target)); request(); }, { rootMargin: '10% 0px' });
    $$('[data-scroll]').forEach(el => sio.observe(el));
    if (tl) sio.observe(tl);
  }
  function onScroll() {
    const y = scrollY, vh = innerHeight, pastHero = hero.getBoundingClientRect().bottom < 120;
    nav.classList.toggle('is-solid', y > 20);
    nav.classList.toggle('is-hidden', pastHero && y > lastY + 4 && !menuOpen);
    const nearEnd = y + vh > html.scrollHeight - vh * 0.8;
    fab.classList.toggle('is-on', pastHero && !menuOpen && !nearEnd);
    if (bar) bar.style.transform = `scaleX(${clamp(y / (html.scrollHeight - vh))})`;
    live.forEach(el => {
      const r = el.getBoundingClientRect();
      if (el === tl) {
        fill.style.transform = `scaleY(${clamp((vh * LINE - r.top) / r.height)})`;
        steps.forEach(st => { const b = st.getBoundingClientRect(); st.classList.toggle('is-on', b.top + b.height / 2 < vh * LINE); });
      } else el.style.setProperty('--p', clamp((vh - r.top) / (vh + r.height)).toFixed(3));
    });
    lastY = y; ticking = false;
  }
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  onScroll();

  /* ---------- Current section highlighted in the menu ---------- */
  const links = $$('.nav__links a');
  if (hasIO) {
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.setAttribute('aria-current', l.getAttribute('href') === '#' + e.target.id ? 'true' : 'false'));
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section').forEach(s => spy.observe(s));
  }

  /* ---------- Mobile menu ---------- */
  const btn = $('#menuBtn'), drawer = $('#drawer');
  const toggle = (open = !menuOpen) => {
    menuOpen = open;
    html.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    drawer.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
    onScroll();
  };
  btn.addEventListener('click', () => toggle());
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) toggle(false); });
  $$('.drawer a').forEach(a => a.addEventListener('click', () => toggle(false)));
})();
