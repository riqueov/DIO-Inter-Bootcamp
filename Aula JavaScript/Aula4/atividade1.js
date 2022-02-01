
const alunos = [
  {
    nome : 'Carlos',
    nota : 3,
    turma : 10,
  },
  {
    nome : 'Marcia',
    nota : 8,
    turma : 13,
  },
  {
    nome : 'Pedro',
    nota : 6,
    turma : 11,
  },
  
  {
    nome : 'Bruna',
    nota : 3,
    turma : 11,
  },
];

function alunosAprovados(arr, media){
  let aprovados = [];

  for(let i = 0; i < arr.length; i++){
    const {nota, nome} = arr[i];
    if(nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 6));