/* Lobbyist — nav + footer injection
   Each page has <div id="nav-mount"></div> and <div id="footer-mount"></div>
*/
(function () {
  const NAV_HTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="brand" aria-label="Lobbyist home">
          <span class="brand-mark">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 28 H28" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round"/>
              <path d="M6 26 V14 M11 26 V14 M16 26 V14 M21 26 V14 M26 26 V14"
                    stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round"/>
              <path d="M4 14 L16 4 L28 14 Z" fill="var(--gold)"/>
              <circle cx="16" cy="10" r="1.6" fill="#0b0a08"/>
            </svg>
          </span>
          <span>The Lobbyist</span>
        </a>

        <div class="nav-links">
          <a class="nav-link" data-page="home"        href="index.html">Home</a>
          <a class="nav-link" data-page="about"       href="about.html">About Us</a>
          <a class="nav-link" data-page="consultant"  href="consultant.html">Our Consultants</a>
          <a class="nav-link" data-page="service"     href="service.html">Our Services</a>
          <a class="nav-link" data-page="portfolio"   href="portfolio.html">Portfolio</a>
          <a class="nav-link" data-page="articles"       href="articles.html">Articles</a>
        </div>

        <div class="nav-cta-group">
          <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>
              <path stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                    d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>
            </svg>
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
                    stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            </svg>
          </button>
          <a href="#consult" class="btn btn-primary">
            Get Consultation
            <svg class="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <button class="mobile-toggle" data-mobile-toggle aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-menu">
        <div class="mobile-menu-inner">
          <a class="mobile-nav-link" data-page="home"        href="index.html">Home</a>
          <a class="mobile-nav-link" data-page="about"       href="about.html">About Us</a>
          <a class="mobile-nav-link" data-page="consultant"  href="consultant.html">Our Consultants</a>
          <a class="mobile-nav-link" data-page="service"     href="service.html">Our Services</a>
          <a class="mobile-nav-link" data-page="portfolio"   href="portfolio.html">Portfolio</a>
          <a class="mobile-nav-link" data-page="articles"       href="articles.html">Articles</a>
          <a href="#consult" class="btn btn-primary mobile-nav-link" style="margin-top: 16px; width: auto; font-family: var(--sans); font-size: 13.5px;">
            Get Consultation
            <svg class="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="width: 14px; height: 14px; margin-left: 8px;">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  `;

  const FOOTER_HTML = `
    <footer id="consult">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="brand" style="margin-bottom:14px;">
              <span class="brand-mark">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 28 H28" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round"/>
                  <path d="M6 26 V14 M11 26 V14 M16 26 V14 M21 26 V14 M26 26 V14"
                        stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round"/>
                  <path d="M4 14 L16 4 L28 14 Z" fill="var(--gold)"/>
                  <circle cx="16" cy="10" r="1.6" fill="#0b0a08"/>
                </svg>
              </span>
              <span>The Lobbyist</span>
            </a>
            <p>
              Policy-level consultancy and technical assistance. Your
              strategic partner in progress — guiding founders, boards and
              regulated enterprises through disputes, mergers and the
              regulatory frontier with discretion and rigour.
            </p>
            <div class="socials" aria-label="Social media">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.92h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.49 3.05 5.49 7.02V22h-4.56v-6.4c0-1.53-.03-3.5-2.14-3.5-2.14 0-2.47 1.67-2.47 3.4V22H8V8z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2H21l-6.51 7.44L22 22h-6.78l-4.79-5.92L4.84 22H2.08l6.97-7.96L2 2h6.92l4.32 5.42L18.24 2zm-1.18 18.2h1.5L7.04 3.7H5.43L17.06 20.2z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About The Lobbyist</a></li>
              <li><a href="consultant.html">Meet Our Consultants</a></li>
              <li><a href="service.html">Our Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="articles.html">Articles</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Reach our location</h4>
            <div class="addr">
              The Lobbyist Service<br/>
              Dili, Timor-Leste
              <br/><br/>
              <span class="gold">+670&nbsp;11&nbsp;3333&nbsp;3743</span><br/>
              <a href="mailto:thelobbyist.service@gmail.com" style="color:inherit;">thelobbyist.service@gmail.com</a>
            </div>
            <div class="map" aria-label="Office location">
              <svg viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <pattern id="grid-map" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M32 0 H0 V32" fill="none" stroke="var(--line)" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="400" height="250" fill="url(#grid-map)"/>
                <!-- roads -->
                <path d="M0 130 C 80 110, 180 170, 280 100 S 400 80 400 80"
                      stroke="var(--gold)" stroke-width="1.2" fill="none" opacity=".55"/>
                <path d="M40 0 L60 90 L120 130 L160 250"
                      stroke="var(--line-strong)" stroke-width="1" fill="none"/>
                <path d="M240 0 L220 80 L260 140 L300 250"
                      stroke="var(--line-strong)" stroke-width="1" fill="none"/>
                <path d="M0 200 L400 180"
                      stroke="var(--line-strong)" stroke-width="1" fill="none"/>
                <!-- blocks -->
                <rect x="180" y="80" width="60" height="44" fill="var(--gold)" opacity=".06" stroke="var(--gold)" stroke-width=".8" opacity=".5"/>
                <rect x="80" y="160" width="50" height="36" fill="var(--line)" opacity=".4"/>
                <rect x="300" y="40" width="40" height="30" fill="var(--line)" opacity=".4"/>
              </svg>
              <div class="pin" title="Lobbyist & Partners"></div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 The Lobbyist Service. Policy-level consultancy &amp; technical assistance.</span>
          <div class="legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  function mount() {
    const navEl = document.getElementById("nav-mount");
    if (navEl) navEl.outerHTML = NAV_HTML;
    const footEl = document.getElementById("footer-mount");
    if (footEl) footEl.outerHTML = FOOTER_HTML;

    // re-apply active state after nav injection
    const page = document.body.dataset.page;
    if (page) {
      document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((a) => {
        if (a.dataset.page === page) a.classList.add("active");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
