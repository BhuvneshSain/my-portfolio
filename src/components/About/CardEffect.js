const handleMouseMove = (e, card) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);

  // Calculate the rotation based on mouse position
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateY = ((x - centerX) / centerX) * 10;
  const rotateX = ((centerY - y) / centerY) * 10;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
};

const handleMouseLeave = (card) => {
  card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateZ(0)`;
};

export const initializeCardEffects = () => {
  const cards = document.querySelectorAll('.tech-icon-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
    card.addEventListener('mouseleave', () => handleMouseLeave(card));
  });
};
