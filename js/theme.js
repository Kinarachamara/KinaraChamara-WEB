// Shared light / dark theme (synced with Free Class)
const THEME_KEY = "al2027_theme";

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    btn.title = isDark ? "Light mode" : "Dark mode";
  });

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = isDark ? "#070b14" : "#4f46e5";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(saved === "dark" ? "dark" : "light");
}

initTheme();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.textContent = "☰";
      });
    });
  }
});
