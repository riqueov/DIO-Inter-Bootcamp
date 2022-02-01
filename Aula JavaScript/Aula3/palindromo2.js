function verificaPalindromo(string){
  if(!string) throw "String invalida!"; 

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try{
    return verificaPalindromo(string)
  }
  catch (e) {
    throw e;
  }
  finally {
    console.log('A string enviada foi: ' + string);
  }
}

tryCatchExemplo('alo');