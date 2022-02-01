function calcIdade(anos){
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 ={
  nome: 'Carla',
  idade: 22,
};
const pessoa2 ={
  nome: 'Silvia',
  idade: 25,
};
const pessoa3 ={
  nome: 'Lucas',
  idade: 36,
};

// Metodo com Call
console.log(calcIdade.call(pessoa1, 30))

//Metodo com Apply
console.log(calcIdade.apply(pessoa2, [20]))