const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade");
    }
  });
});

const cards = document.querySelectorAll(".card");
console.log("🚀 ~ file: index.js:12 ~ cards:", cards);

cards.forEach((card) => observer.observe(card));
