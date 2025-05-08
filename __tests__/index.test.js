const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  //exp: aqui, espera que somar 2 e 3 dê 5
  expect(somar(2, 3)).toBe(5);
});

test("Soma dois números negativos corretamente", () => {
  //exp: aqui, espera que somar -2 e -3 dê -5
  expect(somar(-2, -3)).toBe(-5);
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  //exp: aqui, espera que 5 menos 3 dê 2
  expect(subtrair(5, 3)).toBe(2);
});

test("Subtrai com resultado negativo", () => {
  //exp: aqui, espera que 3 menos 5 dê -2
  expect(subtrair(3, 5)).toBe(-2);
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  //exp: aqui 2 vezes por 3 tem dar 6
  expect(multiplicar(2, 3)).toBe(6);
});

test("Multiplica número por zero", () => {
  //exp: aqui o número multiplicado por 0 tem que dar 0
  expect(multiplicar(5, 0)).toBe(0);
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  //exp: aqui 6 dividido por 2 tem que dar 3
  expect(dividir(6, 2)).toBe(3);
});

test("Lança erro ao dividir por zero", () => {
  //exp: aqui a divisão por zero dá erro (porque não pode dividir por zero)
  expect(() => dividir(5, 0)).toThrow("Não é possível dividir por zero");
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  //exp: aqui 4 é par, então tem que retornar true
  expect(ehPar(4)).toBe(true);
});

test("Verifica se o número é ímpar", () => {
  //exp: aqui 3 é ímpar, então tem que retornar false
  expect(ehPar(3)).toBe(false);
});
