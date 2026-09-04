/* ==========================================================================
   NIHONOVA — app.js
   Renders the whole page from window.SITE (js/content.js) and handles
   language, theme, tabs, accordion, counters and the quote form.
   You should rarely need to touch this file — edit js/content.js instead.
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  var root = document.documentElement;
  var lang = 'en';

  /* Small UI-only strings that are not part of the content config. */
  var UI = {
    footerNav: { en: 'Sections', ja: 'セクション' },
    corridor: { en: 'Live corridor', ja: '稼働中の貿易回廊' },
  };

  /* ------------------------------------------------------------- helpers */
  function pick(v) {
    if (v && typeof v === 'object' && !Array.isArray(v) && ('en' in v || 'ja' in v)) {
      return v[lang] !== undefined ? v[lang] : v.en;
    }
    return v;
  }
  function get(path) {
    return path.split('.').reduce(function (acc, key) {
      return acc == null ? undefined : acc[key];
    }, S);
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function $(sel) {
    return document.querySelector(sel);
  }

  /* Inline icon set used by the services grid */
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><path d="M9 14h6M9 17h4"/>',
    ship: '<path d="M3 17l1.6-6.4a1 1 0 0 1 .97-.76H18.4a1 1 0 0 1 .97.76L21 17"/><path d="M7 10V6h10v4"/><path d="M2 20c1.8 0 2.6-1.2 4-1.2S8.2 20 10 20s2.6-1.2 4-1.2S16.2 20 18 20s2.6-1.2 4-1.2"/>',
    box: '<path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
    shield: '<path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6Z"/><path d="M9.5 12.2 11.4 14l3.4-3.6"/>',
  };
  function icon(name) {
    return (
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || ICONS.box) +
      '</svg>'
    );
  }

  /* ============================================================ RENDERERS */

  function renderMeta() {
    document.title = pick(S.brand.metaTitle);
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', pick(S.brand.metaDescription));
    root.setAttribute('lang', lang === 'ja' ? 'ja' : 'en');
    root.setAttribute('data-lang', lang);
  }

  /* Any element with data-t="path.to.field" gets its text from the config */
  function renderBindings() {
    document.querySelectorAll('[data-t]').forEach(function (node) {
      var val = pick(get(node.getAttribute('data-t')));
      if (typeof val === 'string') node.textContent = val;
    });
  }

  function renderNav() {
    var nav = $('#mainNav');
    var drawer = $('#drawerNav');
    var footer = $('#footerNav');
    nav.innerHTML = '';
    drawer.innerHTML = '';
    footer.innerHTML = '';
    S.nav.forEach(function (item) {
      var label = pick(item.label);
      var a = el('a', null, label);
      a.href = '#' + item.id;
      a.dataset.navlink = item.id;
      nav.appendChild(a);

      var b = el('a', null, label);
      b.href = '#' + item.id;
      b.setAttribute('data-drawer-close', '');
      drawer.appendChild(b);

      var li = el('li');
      var c = el('a', null, label);
      c.href = '#' + item.id;
      li.appendChild(c);
      footer.appendChild(li);
    });
    var ft = $('#footerNavTitle');
    if (ft) ft.textContent = pick(UI.footerNav);
  }

  function renderHero() {
    var h1 = $('#heroHeadline');
    h1.innerHTML = '';
    pick(S.hero.headline).forEach(function (line) {
      var span = el('span');
      span.appendChild(el('i', null, line));
      h1.appendChild(span);
    });
    var img = $('#heroImg');
    img.src = S.hero.image;
    img.alt = pick(S.hero.imageAlt);
    $('#corridorLabel').textContent = pick(UI.corridor);
  }

  function renderTicker() {
    var t = $('#ticker');
    t.innerHTML = '';
    var items = pick(S.ticker);
    // Two identical tracks make the marquee loop seamlessly
    for (var pass = 0; pass < 2; pass++) {
      var track = el('div', 'ticker__track');
      if (pass === 1) track.setAttribute('aria-hidden', 'true');
      items.forEach(function (str) {
        track.appendChild(el('span', 'ticker__item', str));
      });
      t.appendChild(track);
    }
  }

  function renderStats() {
    var grid = $('#statsGrid');
    grid.innerHTML = '';
    S.stats.forEach(function (s) {
      var box = el('div', 'stat');
      var v = el('div', 'stat__value', '0' + (s.suffix ? pick(s.suffix) || s.suffix : ''));
      v.dataset.count = s.value;
      v.dataset.suffix = s.suffix || '';
      box.appendChild(v);
      box.appendChild(el('div', 'stat__label', pick(s.label)));
      box.appendChild(el('div', 'stat__note', pick(s.note)));
      grid.appendChild(box);
    });
    initCounters();
  }

  function renderDirections() {
    var tabs = $('#dirTabs');
    var panels = $('#dirPanels');
    tabs.innerHTML = '';
    panels.innerHTML = '';

    S.directions.tabs.forEach(function (tab, i) {
      var btn = el('button', 'tab', pick(tab.label));
      btn.type = 'button';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.setAttribute('aria-controls', 'panel-' + tab.id);
      btn.id = 'tab-' + tab.id;
      tabs.appendChild(btn);

      var panel = el('div', 'panel' + (i % 2 ? ' panel--flip' : ''));
      panel.id = 'panel-' + tab.id;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', 'tab-' + tab.id);
      if (i !== 0) panel.hidden = true;

      var copy = el('div', 'panel__copy');
      copy.appendChild(el('h3', null, pick(tab.heading)));
      copy.appendChild(el('p', null, pick(tab.body)));
      var ul = el('ul', 'panel__list');
      ul.setAttribute('role', 'list');
      pick(tab.bullets).forEach(function (b) {
        ul.appendChild(el('li', null, b));
      });
      copy.appendChild(ul);

      var fig = el('figure', 'panel__media');
      var im = el('img');
      im.src = tab.image;
      im.alt = pick(tab.imageAlt);
      im.loading = 'lazy';
      fig.appendChild(im);

      panel.appendChild(copy);
      panel.appendChild(fig);
      panels.appendChild(panel);

      btn.addEventListener('click', function () {
        tabs.querySelectorAll('.tab').forEach(function (t) {
          t.setAttribute('aria-selected', 'false');
        });
        btn.setAttribute('aria-selected', 'true');
        panels.querySelectorAll('.panel').forEach(function (p) {
          p.hidden = true;
          p.classList.remove('panel__animate');
        });
        panel.hidden = false;
        void panel.offsetWidth;
        panel.classList.add('panel__animate');
      });
    });
  }

  function renderSectors() {
    var grid = $('#sectorGrid');
    grid.innerHTML = '';
    S.sectors.items
      .filter(function (s) {
        return s.enabled !== false;
      })
      .forEach(function (s) {
        var card = el('article', 'sector reveal');
        card.appendChild(el('span', 'sector__code', s.code));
        card.appendChild(el('h3', null, pick(s.name)));
        card.appendChild(el('p', null, pick(s.desc)));
        if (s.tags) {
          var tags = el('div', 'sector__tags');
          pick(s.tags).forEach(function (t) {
            tags.appendChild(el('span', 'tag', t));
          });
          card.appendChild(tags);
        }
        grid.appendChild(card);
      });

    // The dashed "not final" pill hides itself when the note is emptied
    var note = pick(S.sectors.note);
    var pill = document.querySelector('.editable-note');
    if (pill) pill.style.display = note ? '' : 'none';
  }

  function renderServices() {
    var grid = $('#serviceGrid');
    grid.innerHTML = '';
    S.services.items.forEach(function (s) {
      var card = el('article', 'service');
      var ic = el('div', 'service__icon');
      ic.innerHTML = icon(s.icon);
      card.appendChild(ic);
      card.appendChild(el('h3', null, pick(s.name)));
      card.appendChild(el('p', null, pick(s.desc)));
      grid.appendChild(card);
    });
  }

  function renderProcess() {
    var list = $('#stepList');
    list.innerHTML = '';
    var steps = S.process.steps;

    function select(i) {
      list.querySelectorAll('.step-btn').forEach(function (b, idx) {
        b.setAttribute('aria-selected', idx === i ? 'true' : 'false');
      });
      $('#stepTime').textContent = pick(steps[i].time);
      $('#stepName').textContent = pick(steps[i].name);
      $('#stepDesc').textContent = pick(steps[i].desc);
      $('#stepBar').style.width = ((i + 1) / steps.length) * 100 + '%';
    }

    steps.forEach(function (s, i) {
      var li = el('li');
      var btn = el('button', 'step-btn');
      btn.type = 'button';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      var dot = el('span', 'step-btn__dot', String(i + 1).padStart(2, '0'));
      btn.appendChild(dot);
      btn.appendChild(el('span', 'step-btn__name', pick(s.name)));
      btn.addEventListener('click', function () {
        select(i);
      });
      li.appendChild(btn);
      list.appendChild(li);
    });
    select(0);
  }

  function renderAdvantage() {
    var ul = $('#pointList');
    ul.innerHTML = '';
    S.advantage.points.forEach(function (p) {
      var li = el('li', 'point');
      li.appendChild(el('strong', null, pick(p.name)));
      li.appendChild(el('span', null, pick(p.desc)));
      ul.appendChild(li);
    });
    var img = $('#advImg');
    img.src = S.advantage.image;
    img.alt = pick(S.advantage.imageAlt);
  }

  function renderFaq() {
    var wrap = $('#faqList');
    wrap.innerHTML = '';
    S.faq.items.forEach(function (item, i) {
      var box = el('div', 'faq-item');
      box.dataset.open = 'false';

      var btn = el('button', 'faq-q');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', 'faq-a-' + i);
      btn.appendChild(el('span', null, pick(item.q)));
      var ic = el('span', 'faq-q__icon');
      ic.setAttribute('aria-hidden', 'true');
      btn.appendChild(ic);

      var ans = el('div', 'faq-a');
      ans.id = 'faq-a-' + i;
      var inner = el('div');
      inner.appendChild(el('p', null, pick(item.a)));
      ans.appendChild(inner);

      btn.addEventListener('click', function () {
        var open = box.dataset.open === 'true';
        wrap.querySelectorAll('.faq-item').forEach(function (o) {
          o.dataset.open = 'false';
          o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          box.dataset.open = 'true';
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      box.appendChild(btn);
      box.appendChild(ans);
      wrap.appendChild(box);
    });
  }

  function renderContact() {
    var wrap = $('#offices');
    wrap.innerHTML = '';
    S.contact.offices.forEach(function (o) {
      var box = el('div', 'office');
      box.appendChild(el('strong', null, pick(o.city)));
      pick(o.lines).forEach(function (l) {
        box.appendChild(el('span', null, l));
      });
      wrap.appendChild(box);
    });

    var mail = $('#contactEmail');
    mail.textContent = S.contact.email;
    mail.href = 'mailto:' + S.contact.email;
    $('#contactPhone').textContent = S.contact.phone;

    var fMail = $('#footerEmail');
    fMail.textContent = S.contact.email;
    fMail.href = 'mailto:' + S.contact.email;
    $('#footerPhone').textContent = S.contact.phone;

    var sel = $('#f-direction');
    sel.innerHTML = '';
    pick(S.contact.form.directionOptions).forEach(function (opt) {
      var o = el('option', null, opt);
      o.value = opt;
      sel.appendChild(o);
    });
    $('#f-product').placeholder = pick(S.contact.form.productPlaceholder);
    $('#formStatus').textContent = '';
  }

  /* ========================================================== BEHAVIOURS */

  /* Animated stat counters */
  function initCounters() {
    var nodes = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) {
        n.textContent = n.dataset.count + n.dataset.suffix;
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var n = e.target;
          io.unobserve(n);
          var target = parseFloat(n.dataset.count);
          var suffix = n.dataset.suffix || '';
          if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
            n.textContent = target + suffix;
            return;
          }
          var start = performance.now();
          var dur = 900;
          (function tick(now) {
            var p = Math.min((now - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            n.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          })(start);
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  /* Header shadow + active nav link */
  function initScroll() {
    var header = $('#siteHeader');
    var onScroll = function () {
      header.classList.toggle('header--scrolled', window.scrollY > 12);
      var img = $('#heroImg');
      if (img && window.scrollY < window.innerHeight * 1.2) {
        img.style.transform = 'translateY(' + window.scrollY * 0.14 + 'px)';
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          document.querySelectorAll('[data-navlink]').forEach(function (a) {
            a.setAttribute('aria-current', a.dataset.navlink === e.target.id ? 'true' : 'false');
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    S.nav.forEach(function (n) {
      var sec = document.getElementById(n.id);
      if (sec) io.observe(sec);
    });
  }

  /* Theme toggle (in-memory, honours system preference on load) */
  function initTheme() {
    var btn = document.querySelector('[data-theme-toggle]');
    var mode = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var sun =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.6"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';
    var moon =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>';
    function apply() {
      root.setAttribute('data-theme', mode);
      btn.innerHTML = mode === 'dark' ? sun : moon;
      btn.setAttribute('aria-label', 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode');
      var tc = document.querySelector('meta[name="theme-color"]');
      if (tc) tc.setAttribute('content', mode === 'dark' ? '#0c1219' : '#16324f');
    }
    apply();
    btn.addEventListener('click', function () {
      mode = mode === 'dark' ? 'light' : 'dark';
      apply();
    });
  }

  /* Language switch */
  function initLang() {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.getAttribute('data-lang-btn');
        if (next === lang) return;
        lang = next;
        document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
          b.setAttribute('aria-pressed', b.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
        });
        renderAll();
      });
    });
  }

  /* Mobile drawer */
  function initDrawer() {
    var drawer = $('#drawer');
    var openBtn = $('#menuBtn');
    function set(open) {
      drawer.dataset.open = open ? 'true' : 'false';
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    openBtn.addEventListener('click', function () {
      set(true);
    });
    $('#drawerClose').addEventListener('click', function () {
      set(false);
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('[data-drawer-close], a')) set(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') set(false);
    });
  }

  /* Quote form — swap the body of this handler to POST to your own endpoint */
  function initForm() {
    var form = $('#quoteForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = $('#formStatus');
      if (!form.reportValidity()) return;
      /* --- Replace from here to send the brief somewhere real -----------
         var data = Object.fromEntries(new FormData(form).entries());
         fetch('https://your-endpoint.example/quote', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(data)
         });
      ------------------------------------------------------------------ */
      status.textContent = pick(S.contact.form.success);
      form.reset();
      renderContact();
      $('#formStatus').textContent = pick(S.contact.form.success);
    });
  }

  /* =============================================================== BOOT */
  function renderAll() {
    renderMeta();
    renderBindings();
    renderNav();
    renderHero();
    renderTicker();
    renderStats();
    renderDirections();
    renderSectors();
    renderServices();
    renderProcess();
    renderAdvantage();
    renderFaq();
    renderContact();
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  renderAll();
  initTheme();
  initLang();
  initDrawer();
  initScroll();
  initForm();
})();
