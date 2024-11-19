document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("[data-collapse-toggle]");
  const navbar = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", () => {
    const isHidden = navbar.classList.contains("hidden");
    if (isHidden) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  });
});
