(function () {
  const printButtons = document.querySelectorAll('[data-action="print"]');

  printButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.print();
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".project-card, .focus-card, .stack-grid > div").forEach((node) => {
    observer.observe(node);
  });
})();
