const lista = [
  {
    nome : 'audi a1',
    preco : 70500,
  },
  {
    nome : 'toyota corolla 2017',
    preco : 60500,
  },
  {
    nome : 'ferrari f450',
    preco : 400100,
  }
]

const saldo = 700300;

function reducePratice(saldo, lista){
  return lista.reduce(function(prev, current, index){
    console.log('Compra ', index + 1);
    console.log('Saldo ', {prev});
    console.log({current});
    return prev - current.preco;
  }, saldo); 
}

console.log(reducePratice(saldo, lista));
