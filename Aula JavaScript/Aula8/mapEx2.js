function mapSemThis(arr){
  return arr.map(function(item){
    return item * 2;
  });
}

const num = [2, 4, 10];

console.log(mapSemThis(num));