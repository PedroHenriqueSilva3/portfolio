const text = "Bem-vindo ao meu portfolio!\nÉ um prazer recebê-lo aqui, onde compartilho uma parte do meu mundo criativo e profissional. Este espaço é onde expresso minha paixão, dedicação e experiência em desenvolvimento de sistemas."; // Texto para digitar
let index = 0;

function type() {
  document.getElementById('typeText').textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 30); // Ajuste a velocidade da digitação aqui (em milissegundos)
  }
}

type();