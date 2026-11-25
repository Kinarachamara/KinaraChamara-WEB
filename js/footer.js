document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `© 2026 Kinara Chamara · Built with passion from Sri Lanka`;
  const wrap = document.querySelector(".wrap");
  if (wrap) wrap.appendChild(footer);
  else document.body.appendChild(footer);
});
