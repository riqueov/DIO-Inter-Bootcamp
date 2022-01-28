//Aprendendo sobre Array
//let array = ['string', 1, true, ['array2'],['array3']];
//console.log(array)

/* Opções para o array
forEach() – itera um array;
push() – add item no final do array;
pop() – remove item no final do array;
shift() – remove item no início do array;
unshift() – add item no início do array;
indexOf() – retorna o índice de um valor;
splice() – remove ou substitui um item pelo índice;
slice() – retorna uma parte de um array existente; */

var jogador1 = 0;
var jogador2 = 0;
var placar;
//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
  console.log('Os jogadores são invalidos');

//usando if
if (jogador1 > 0 && jogador2 === 0) {
  console.log('Jogador1 marcou um gol');
  placar = jogador1 > jogador2;
}
//usando else if
else if (jogador2 > 0 && jogador1 === 0) {
  console.log('Jogador2 marcou um gol');
  placar = jogador2 > jogador1;
}
//usando else, tudo dentro do if acima.
else {
  console.log('Ninguém marcou gol');
}

switch (placar) {
  case placar = jogador1 > jogador2:
    console.log('Jogador1 Ganhou')
    break;
  case placar = jogador1 < jogador2:
    console.log('Jogador2 Ganhou')
    break;
  case placar = jogador1 === jogador2:
    console.log('Empate!')
    break;
}
