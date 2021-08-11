const primeiroValor = true;
const segundoValor = false;

// == compara apenas valor; === compara valor e tipo
const valorIgual = primeiroValor == segundoValor;
console.log(`${primeiroValor} == ${segundoValor}: ${valorIgual}`)

//Trusthy e Falsy
const terceiroValor = 0;
const quartoValor = '';

console.log(`Terceiro valor: ${terceiroValor == false}`);
console.log(`Terceiro valor: ${quartoValor == false}`);

