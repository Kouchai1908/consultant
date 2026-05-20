/* Lobbyist — shared interactions
   - theme persistence
   - mobile nav
   - scroll reveal observer
*/
(function () {
  // ---- THEME ----
  const root = document.documentElement;
  const KEY = "lobbyist-theme";
  const stored = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    localStorage.setItem(KEY, t);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    const cur = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    setTheme(cur === "dark" ? "light" : "dark");
  });

  // ---- MOBILE NAV ----
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-mobile-toggle]");
    const link = e.target.closest(".mobile-nav-link");
    const menu = document.querySelector(".mobile-menu");
    
    if (btn) {
      if (menu) {
        menu.classList.toggle("open");
        btn.classList.toggle("active");
      }
    } else if (link || (menu && menu.classList.contains("open") && !e.target.closest(".mobile-menu-inner"))) {
      if (menu) menu.classList.remove("open");
      const activeBtn = document.querySelector("[data-mobile-toggle]");
      if (activeBtn) activeBtn.classList.remove("active");
    }
  });

  // ---- SCROLL REVEAL ----
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  function bindReveals() {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      if (!el.dataset.bound) {
        el.dataset.bound = "1";
        io.observe(el);
      }
    });
  }
  document.addEventListener("DOMContentLoaded", bindReveals);
  // also after a tick (for late content)
  window.addEventListener("load", bindReveals);

  // ---- ACTIVE NAV (matches by data-page) ----
  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (!page) return;
    document.querySelectorAll(".nav-link").forEach((a) => {
      if (a.dataset.page === page) a.classList.add("active");
    });
  });
})();
