//Crie um botão que se move (altera top e left com position: absolute) seguindo o ponteiro do mouse na tela.

const botao = document.getElementById('meuBotao');
  const container = document.getElementById('container');

  container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const x = e.clientX - containerRect.left - (botao.offsetWidth / 2);
    const y = e.clientY - containerRect.top - (botao.offsetHeight / 2);

    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;
  });
    container.addEventListener('mouseleave', () => {
    botao.style.left = '0px';
    botao.style.top = '0px';
  });