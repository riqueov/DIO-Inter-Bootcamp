function getAdmin(map){
  let admin = []; //criar um array para a função localizar usuarios administradores.

  for([key, value] of map) { //for percorre os valores.
    if(value === 'Admin') { //Caso admin seja identico ao valor então iremos retornar.
      admin.push(key); //a Key é recebida para admin através do push.
    }
  }
  return admin; //Por fim retornamos os valores para o array admin
}

const usuarios = new Map(); //criamos um metodo map para os usuários e classificamos ele através do set

usuarios.set('Luiz','Admin');
usuarios.set('Claudio','Admin');
usuarios.set('Jorge','User');
usuarios.set('Henrique','User');

console.log(getAdmin(usuarios)) //No console a função getAdmin recebera os valores de usuários.