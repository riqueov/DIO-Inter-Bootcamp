function verificaPalindromo(string){
  //nessa atividade criamos uma function que irá verificar se palavras são iguais se lidas ao contrário, como as palavras OVO ou AMA.
  if(!string) return 'string inexistente!'; //aqui verificamos se o valor é diferente de string, como Null ou undefined.
  
  return string.split("").reverse().join("") === string;
//Split = ele divide a frase de acordo com o especificado dentro dos parenteses, no caso que não temos espaço, ele irá dividir letra por letra em um array.
//reverse = inverte a ordem da frase ou palavras.
//join = e o separador, deixando vazio ele não irá separar nossas palavras
//e tudo isso deve ser igual a uma string.
}
function verificaPalindromo(string){
  if(!string) return 'string inexistente!';

  for(let i = 0; i < string.length / 2; i++){
    
  }
}
console.log(verificaPalindromo("ovo"));

function inverteFrase(){
var frase = "Loren ipsum blablabla";
return frase.split("").reverse().join(""); // essa função foi usada para testar as diferentes possibilidades que podem ser usadas com split, join e reverse.
}

console.log(inverteFrase());