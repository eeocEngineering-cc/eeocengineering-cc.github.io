async function loadTopbar(activePage) {
  const placeholder = document.getElementById("topbar-placeholder");
  if (!placeholder) return;

  try {
    const res = await fetch("partials/topbar.html");
    placeholder.innerHTML = await res.text();
  } catch (err) {
    console.error("Couldn't load top bar:", err);
    return;
  }

  placeholder.querySelectorAll(".topbar-nav a").forEach((a) => {
    if (a.dataset.page === activePage) a.classList.add("active");
  });

  const toggle = document.getElementById("topbarToggle");
  const nav = document.getElementById("topbarNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("open");
    });
    // close the mobile menu after a link is tapped
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }
}
