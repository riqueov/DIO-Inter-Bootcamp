/* Minha primeira tentativa
 function sintaxeOperadoresEx(){
  var primeiro = Number(prompt("Digite um numero"));
  var segundo = Number(prompt("Digite um numero"));

  fraseigual1 = `Os numeros ${primeiro} e ${segundo} são iguais`;
  fraseigual2 = `Os numeros ${primeiro} e ${segundo} são diferentes`;

  soma = primeiro + segundo;

  var igual = primeiro == segundo ? fraseigual1 : fraseigual2;

  m10v = 'menor que 10'
  m10f = 'maior que 10'

  var m10 = primeiro + segundo < 10 ? m10v : m10f;

  m20v = 'menor que 20'
  m20f = 'maior que 20'

  var m20 = primeiro + segundo < 20 ? m20v : m20f;

  alert(`${igual} e a soma é de ${soma} \n Sua soma é ${m10} e ${m20}.`)
} */

//Outra forma
function sintaxeOperadoresEx(primeiro, segundo){

  const igual = primeiro === segundo ? "São iguais" : "Não são iguais";
  const soma = primeiro + segundo;

  var m10 = primeiro + segundo < 10 ? 'menor que 10' : 'maior que 10';

  var m20 = primeiro + segundo < 20 ? 'menor que 20' : 'maior que 20';

  return(`${primeiro} e ${segundo} ${igual} e a soma é de ${soma} \nSua soma é ${m10} e ${m20}.`)
}

console.log(sintaxeOperadoresEx(2, 3));