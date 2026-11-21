const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

for (const span of document.querySelectorAll("[data-year]")) {
  span.textContent = new Date().getFullYear();
}

const header = document.querySelector("header.navbar");
if (header) {
  const update = () => {
    header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
  };
  update();
  if (!prefersReducedMotion) {
    window.addEventListener("scroll", update, { passive: true });
  }
}

for (const button of document.querySelectorAll("[data-copy]")) {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const original = button.textContent;
      button.textContent = "Kopiert ✓";
      setTimeout(() => {
        button.textContent = original;
      }, 2000);
    } catch {
      window.prompt("Zum Kopieren markieren:", button.dataset.copy);
    }
  });
}

const form = document.querySelector("form[data-mailto]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const to = form.dataset.mailto;
    const data = new FormData(form);
    const subject = `Seelenmeer Anfrage: ${data.get("anliegen")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Anliegen: ${data.get("anliegen")}`,
      "",
      data.get("nachricht"),
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const navLinks = new Map();
for (const link of document.querySelectorAll("[data-nav]")) {
  navLinks.set(link.dataset.nav, link);
}
if (navLinks.size) {
  const sections = [...navLinks.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const setActive = (id) => {
    for (const [key, link] of navLinks) {
      link.classList.toggle("menu-active", key === id);
      if (key === id) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      }
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  for (const section of sections) {
    observer.observe(section);
  }
}
