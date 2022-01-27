// referencia ao primeiro codigo
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
  if (currentNumber < 10) {  
    currentNumber = currentNumber + 1;
  } else{
    currentNumber = 10;
  }
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  if (currentNumber > 0) {  
    currentNumber = currentNumber - 1;
  } else{
    currentNumber = 0;
  }
  currentNumberWrapper.innerHTML = currentNumber;
}

//mensagem de apresentação

function msg() {
  alert("Pagina teste criada para adquirir novos conhecimentos, contador com duas funções increment e decrement, e aqui em nosso 'clique aqui' temos uma função com addEventListener, que substitui o onclick deixando o codigo com html puro referenciando através do ID");
}

function eventlistenerTest() {
  document.getElementById("clicando").addEventListener("click", msg);
}
window.addEventListener("load", eventlistenerTest);


//Segunda execução com diferentes nomes de variáveis para não ter conflito
var NumeroAtualEncapsulado = document.getElementById("numeroAtual")
var NumeroAtual = 0;

function incrementar() {
  
  if (NumeroAtual < 10) {  
    NumeroAtual = NumeroAtual + 1;
  } else{
    NumeroAtual = 10;
  }
  NumeroAtualEncapsulado.innerHTML = NumeroAtual;
  voltaCor();
}

function escutandoEvento() {
  document.getElementById("adicionar").addEventListener("click", incrementar);
}
window.addEventListener("load", escutandoEvento);

function decrementar() {
  NumeroAtual = NumeroAtual - 1;
 
  NumeroAtualEncapsulado.innerHTML = NumeroAtual;
  mudarCor();
}

function escutandoEvento2() {
  document.getElementById("subtrair").addEventListener("click", decrementar);
  objeto.addEventListener("click", decrement);
}
window.addEventListener("load", escutandoEvento2);


function mudarCor() {
  if(NumeroAtual <= 0){
    document.getElementById("numeroAtual").style.color = 'red';
  }
  NumeroAtualEncapsulado.innerHTML = NumeroAtual;
}
function voltaCor() {
  if(NumeroAtual > 0){
    document.getElementById("numeroAtual").style.color = 'black';
  }
  NumeroAtualEncapsulado.innerHTML = NumeroAtual;
}