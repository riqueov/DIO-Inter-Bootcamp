function multiplica(arr){
  let porDois = [];

  for(let i = 0; i < arr.length ; i++) {
    porDois.push(arr[i]*2)
  }
  return porDois;
}

var num =[2, 4, 10, 30];
//console.log(multiplica(num));

function exemplo(obj){
  for (propriedade in obj) {
    console.log(propriedade);
    //Nesse caso iremos imprimir as propriedades do objeto
  }
}
const meuObjeto = {
  nome : "audi",
  preco : "80.000",
  //ano : "2017"
}
exemplo(meuObjeto);

function exemplo2(obj2){
  for (propriedade2 in obj2) {
    console.log(obj2[propriedade2]); 
    //O objeto será impresso no console se ele for especificado dessa forma, colocando a propriedade em colchetes. 
  }
}
const meuObjeto2 = {
  nome : "audi",
  preco : "80.000",
  //ano : "2017"
}
exemplo2(meuObjeto2);

function exemplo3(palavra) {
  for(letra of palavra){
    console.log(letra);
  }
}
const palavra = "RS3";
exemplo3(palavra)  

//exemplo 4 abaixo, usando call e metodo this.
const lugar = {
  nome : 'loja'
}
const cor = {
  nome : 'azul'
}
function getCorLugar(){
  console.log(this.nome)
}

getCorLugar.call(lugar);

const ex5 = {
  numUm : 2,
  numDois : 4,
};

function soma(a, b) {
  console.log(this.numUm + this.numDois + a + b);
}

soma.call(ex5, 2, 4);

const arrowFunc = () => "Testando a setinha, arrow function. Call, bind ou apply não podem ser usadas com a arrow";
console.log(arrowFunc());

const arrowFunc2 = (a, b) => a + b;
console.log(arrowFunc2(4, 6));