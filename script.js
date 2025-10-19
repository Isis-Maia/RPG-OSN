const engrenagem = document.querySelector('#engrenagem img');
let ultimaPosicao = window.scrollY;
let rotacao = 0;

window.addEventListener('scroll', () => {
  const posicaoAtual = window.scrollY;

  // diferença da rolagem
  let diferenca = posicaoAtual - ultimaPosicao;

  // multiplica por um fator pra deixar a rotação mais lenta
  rotacao += diferenca * 0.5; // 0.5 é a “sensibilidade”, ajuste se quiser mais lento

  // aplica a rotação
  engrenagem.style.transform = `rotate(${rotacao}deg)`;

  ultimaPosicao = posicaoAtual;
});
