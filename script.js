// Animação no título ao carregar a página
window.onload = () => {
  const titulo = document.getElementById("titulo");
  titulo.style.transition = "transform 1s";
  titulo.style.transform = "scale(1.5)";
  setTimeout(() => {
    titulo.style.transform = "scale(1)";
  }, 1000);
};

// Clique nos itens da lista para destacar
document.querySelectorAll(".titulos li").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.color = "#e32636";
    setTimeout(() => {
      item.style.color = "#ffd700";
    }, 500);
  });
});
