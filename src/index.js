// Função que soma dois números
function somar(a, b) {
  // exp: aqui estamos somando o valor de A e B, e retornando o resultado.
  return a + b;
}

// Função que subtrai dois números
function subtrair(a, b) {
  // exp: aqui estamos subtraindo o valor de A de B, e retornando o resultado.
  return a - b;
}

// Função que multiplica dois números
function multiplicar(a, b) {
  // exp: aqui estamos multiplicando A por B, e retornando o resultado.
  return a * b;
}

// Função que divide dois números, com verificação de divisão por zero.
function dividir(a, b) {
  // exp: aqui se o número B for zero, ocorrerá um erro, pois não podemos dividir por zero.
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }
    // exp: aqui se não for zero, fazemos a divisão normalmente.
  return a / b;
}

// Função que verifica se um número é par
function ehPar(n) {
  // exp: aqui vamos ver se o numero e divisivel por 2 (se o resto  da divisão for zero).
  return n % 2 === 0; 
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
