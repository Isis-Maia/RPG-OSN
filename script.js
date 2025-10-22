
// engrenagem
const engrenagem = document.querySelector('#engrenagem1 img');
let ultimaPosicao = window.scrollY;
let rotacao = 0;

window.addEventListener('scroll', () => {
  const posicaoAtual = window.scrollY;
  let diferenca = posicaoAtual - ultimaPosicao;
  rotacao += diferenca * 0.5;
  engrenagem.style.transform = `rotate(${rotacao}deg)`;

  ultimaPosicao = posicaoAtual;
});


// container

  // animação de entrada
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150); // atraso gradual entre cards
  });
});

// brilho dos cards com o mouse
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => card.classList.add("glow"));
  card.addEventListener("mouseleave", () => card.classList.remove("glow"));
});




// brilho no mouse
// document.querySelectorAll(".card").forEach(card => {
//   card.addEventListener("mousemove", e => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     card.style.background = `
//       radial-gradient(circle at ${x}px ${y}px, #8b0000 0%, #704214 80%)
//     `;
//   });
//   card.addEventListener("mouseleave", () => {
//     card.style.background = "#704214";
//   });
// });


// Bestiario

function showEspecies(id) {
  document.querySelectorAll('.info-especies').forEach(s => s.classList.remove('ativo'));
  document.getElementById(id).classList.add('ativo');
}

// reforma

document.addEventListener("DOMContentLoaded", () => {
  const aviso = document.getElementById("emConstrucao");
  const fechar = document.getElementById("fecharAviso");

  fechar.addEventListener("click", () => {
    aviso.style.display = "none";
  });
});
