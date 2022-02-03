//ex de pratica
/* function multiplica(arr){
  return arr.map(function(item){
    if (item % 5 == 0){
      return item * 5;
    } else if (item % 2 === 0) {
      return cons = [item];
    }
  })
}
 */
function filterTest(arr){ //teste para filter
  return arr.filter(function(item){
    return item % 2 == 0;
  })
}

const num = [2, 5, 10, 12, 15, 18];

//console.log('Os numeros destacados correspondem aos pares \n', multiplica(num)); //log da função um


console.log('Os numeros pares do Array:', filterTest(num)); //log da função dois