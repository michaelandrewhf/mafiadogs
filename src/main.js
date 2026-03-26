const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const currentYear = document.querySelector("[data-current-year]");
const revealElements = document.querySelectorAll(".reveal");
const menuLinks = menu ? menu.querySelectorAll("a") : [];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  if (!menu || !menuToggle) return;
  menu.classList.add("hidden");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};

const toggleMenu = () => {
  if (!menu || !menuToggle) return;
  const isOpen = menu.classList.contains("hidden");

  if (isOpen) {
    menu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    return;
  }

  closeMenu();
};

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

if (!reduceMotion.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
