(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     Validador de carga e cotação por WhatsApp
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-bau-validator]').forEach((validator) => {
    const checks = [...validator.querySelectorAll('[data-bau-check]')];
    const cta = validator.querySelector('[data-whatsapp-cta]');
    const status = validator.querySelector('[data-validator-status]');
    if (!checks.length || !cta || !status) return;

    const update = () => {
      const valid = checks.every((check) => check.checked);
      cta.disabled = !valid;
      status.textContent = valid
        ? 'Carga confirmada. Você pode continuar no WhatsApp.'
        : 'Marque as três confirmações para liberar a cotação.';
    };

    checks.forEach((check) => check.addEventListener('change', update));

    cta.addEventListener('click', () => {
      const text = [
        'Olá, preciso de uma cotação ZaptLog.',
        'Solicito uma coleta e uma entrega.',
        'Coleta: [endereço completo].',
        'Entrega: [endereço completo].',
        'Conteúdo: [descrição].',
        'Medidas da embalagem fechada: [comprimento × largura × altura] cm.',
        'Meu pacote cabe no baú e está embalado.',
        `Origem: ${validator.dataset.pageSlug}`,
      ].join(' ');

      const params = new URLSearchParams({
        text,
        ref: validator.dataset.pageSlug || 'site',
      });

      window.location.assign(
        `https://wa.me/${validator.dataset.whatsappNumber}?${params}`,
      );
    });

    update();
  });

  /* ------------------------------------------------------------------------
     Conferência de medidas do baú
     ------------------------------------------------------------------------ */
  const calculator = document.querySelector('[data-calculator]');

  if (calculator) {
    calculator.addEventListener('submit', (event) => {
      event.preventDefault();

      const fields = {
        comprimento: calculator.querySelector('[data-length]'),
        largura: calculator.querySelector('[data-width]'),
        altura: calculator.querySelector('[data-height]'),
      };
      const output = calculator.querySelector('[data-bau-result]');
      if (!output || Object.values(fields).some((field) => !field)) return;

      const values = Object.fromEntries(
        Object.entries(fields).map(([key, field]) => [
          key,
          Number(field.value.replace(',', '.')),
        ]),
      );
      const invalid = Object.entries(values).find(
        ([, value]) => !Number.isFinite(value) || value <= 0,
      );

      if (invalid) {
        output.textContent = `Informe ${invalid[0]} com um número maior que zero.`;
        return;
      }

      const limits = {
        comprimento: Number(calculator.dataset.bauLength),
        largura: Number(calculator.dataset.bauWidth),
        altura: Number(calculator.dataset.bauHeight),
      };
      const boxSides = [values.comprimento, values.largura, values.altura].sort(
        (a, b) => b - a,
      );
      const bauSides = [limits.comprimento, limits.largura, limits.altura].sort(
        (a, b) => b - a,
      );
      const labels = ['maior face', 'face intermediária', 'altura'];
      const reasons = [];

      boxSides.forEach((side, index) => {
        if (side > bauSides[index]) {
          reasons.push(
            `a ${labels[index]} do volume (${side} cm) passa do limite de ${bauSides[index]} cm`,
          );
        }
      });

      if (reasons.length) {
        output.textContent = `Não cabe no baú: ${reasons.join('; ')}. Ajuste a embalagem ou fale com a central para avaliar outro transporte.`;
        return;
      }

      output.textContent =
        'O volume cabe no baú fechado. Envie o tipo de material, as medidas e os endereços no WhatsApp para receber a cotação da central.';
    });
  }

  /* ------------------------------------------------------------------------
     Menu principal
     ------------------------------------------------------------------------ */
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (menu && nav) {
    const setMenu = (open) => {
      menu.setAttribute('aria-expanded', String(open));
      nav.dataset.open = String(open);
      document.body.classList.toggle('menu-open', open);
      if (!open) {
        nav.querySelectorAll('details[open]').forEach((details) => {
          details.open = false;
        });
      }
    };

    menu.addEventListener('click', () => {
      setMenu(menu.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('click', (event) => {
      if (
        menu.getAttribute('aria-expanded') === 'true' &&
        !event.target.closest('.site-header')
      ) {
        setMenu(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });

    window.matchMedia('(min-width: 1021px)').addEventListener('change', (event) => {
      if (event.matches) setMenu(false);
    });
  }

  /* ------------------------------------------------------------------------
     Grupos de navegação: um aberto por vez
     ------------------------------------------------------------------------ */
  const navGroups = [...document.querySelectorAll('.nav-group')];

  navGroups.forEach((group) => {
    group.addEventListener('toggle', () => {
      if (!group.open) return;
      navGroups.forEach((other) => {
        if (other !== group) other.open = false;
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-group')) {
      navGroups.forEach((group) => {
        group.open = false;
      });
    }
  });

  /* ------------------------------------------------------------------------
     Progresso de leitura
     ------------------------------------------------------------------------ */
  const progress = document.querySelector('[data-reading-progress]');
  const article = document.querySelector('[data-editorial]');

  if (progress && article) {
    let ticking = false;

    const updateProgress = () => {
      const start = article.offsetTop;
      const length = Math.max(article.offsetHeight - window.innerHeight * 0.35, 1);
      const ratio = Math.min(1, Math.max(0, (window.scrollY - start) / length));
      progress.style.width = `${(ratio * 100).toFixed(2)}%`;
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateProgress);
          ticking = true;
        }
      },
      { passive: true },
    );

    updateProgress();
  }

  /* ------------------------------------------------------------------------
     CTA móvel
     ------------------------------------------------------------------------ */
  const mobileCta = document.querySelector('.mobile-cta');

  if (mobileCta) {
    const toggleMobileCta = () => {
      mobileCta.classList.toggle('is-visible', window.scrollY > 420);
    };

    window.addEventListener('scroll', toggleMobileCta, { passive: true });
    toggleMobileCta();
  }

  /* ------------------------------------------------------------------------
     Índice ativo
     ------------------------------------------------------------------------ */
  const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];

  if (tocLinks.length && 'IntersectionObserver' in window) {
    const targets = tocLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const tocObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tocLinks.forEach((link) => {
            link.classList.toggle(
              'is-active',
              link.getAttribute('href') === `#${entry.target.id}`,
            );
          });
        });
      },
      { rootMargin: '-18% 0px -70% 0px', threshold: 0 },
    );

    targets.forEach((target) => tocObserver.observe(target));
  }

  /* ------------------------------------------------------------------------
     Revelação discreta de seções
     ------------------------------------------------------------------------ */
  const revealItems = [...document.querySelectorAll('.reveal')];

  if (revealItems.length && 'IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
