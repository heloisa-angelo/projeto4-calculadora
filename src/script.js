let operacao = "";
let sunFooter = document.querySelector(".footer-img");
let display = document.getElementById("display");

console.log(display);

sunFooter.addEventListener("click", modoEscuroClaro);

function modoEscuroClaro() {
  document.body.classList.toggle("modoClaro");
}

function adicionarNumero(numero) {
  if (operacao === "Erro") {
    operacao = numero;
    atualizarDisplay();
  } else {
    operacao += numero;
    atualizarDisplay();
  }
}

function adicionarOperador(operador) {
  if (operacao === "Erro") {
    operacao = `${operador}`;
    atualizarDisplay();
  } else {
    operacao += `${operador}`;
    atualizarDisplay();
  }
}

function limpar() {
  operacao = "";
  atualizarDisplay();
}

function apagar() {
  operacao = operacao.slice(0, -1);
  atualizarDisplay();
}

function calcular() {
  try {
    operacao = eval(operacao);
    atualizarDisplay();
  } catch {
    operacao = "Erro";
    atualizarDisplay();
    display.style.backgroundColor = "red";
  }
}

function atualizarDisplay() {
  display.value = operacao;
  display.style.backgroundColor = "var(--borda-secundario)";
}