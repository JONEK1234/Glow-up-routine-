/**
 * Helper unificato e affidabile per lo scroll in cima (Top of page/section).
 * Gestisce istantaneamente lo scroll sia su desktop che su dispositivi mobili,
 * iframe e WebKit, annullando eventuali ritardi di layout o ancoraggi del browser.
 */
export const scrollToTop = (smooth: boolean = false) => {
  if (typeof window === 'undefined') return;

  const performScroll = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'instant'
      });
    } catch {
      window.scrollTo(0, 0);
    }

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    const root = document.getElementById('root');
    if (root) {
      root.scrollTop = 0;
    }

    const main = document.querySelector('main');
    if (main) {
      main.scrollTop = 0;
    }

    const scrollContainers = document.querySelectorAll('[data-scrollable="true"], .overflow-y-auto, .overflow-y-scroll');
    scrollContainers.forEach((el) => {
      (el as HTMLElement).scrollTop = 0;
    });
  };

  // Esecuzione immediata
  performScroll();

  // Esecuzione al frame successivo (post-rendering DOM)
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(() => {
      performScroll();
    });
  }

  // Timeout sequenziali per contrastare il layout shift e lo scroll-restoration mobile
  setTimeout(performScroll, 20);
  setTimeout(performScroll, 60);
  setTimeout(performScroll, 150);
};

/**
 * Scorre direttamente all'inizio di una specifica nota/sezione aperta,
 * lasciando il giusto margine sotto la barra di navigazione sticky.
 */
export const scrollToElement = (element: HTMLElement | null, offset: number = 68) => {
  if (typeof window === 'undefined' || !element) return;

  const performScrollToEl = () => {
    const rect = element.getBoundingClientRect();
    const currentScrollTop =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement ? document.documentElement.scrollTop : 0) ||
      (document.body ? document.body.scrollTop : 0) ||
      0;

    const targetTop = Math.max(0, rect.top + currentScrollTop - offset);

    try {
      window.scrollTo({
        top: targetTop,
        left: 0,
        behavior: 'smooth'
      });
    } catch {
      window.scrollTo(0, targetTop);
    }
  };

  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(() => {
      setTimeout(performScrollToEl, 30);
    });
  } else {
    setTimeout(performScrollToEl, 40);
  }
};

