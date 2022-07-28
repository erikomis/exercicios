const dados = require("./dados.json");

// 2)
function Fibonacci(num, valor) {
  var before = 0;
  var actual = 1;
  var next = 1;

  let test = "nao pertence";
  for (let i = 0; i < num; i++) {
    before = actual + next;
    actual = next;
    next = before;
    if (next === valor) {
      test = "pertence";
    }
    break;
  }
  return test;
}
console.log(Fibonacci(100, 2));
// 3)
function calcula(dados) {
  const dadosFilter = dados.filter((dado) => dado.valor > 0);
  const media =
    dadosFilter.reduce((acc, current) => acc + current.valor, 0) / dados.length;
  const maiorValor = dados.reduce(
    (acc, curr) => (acc < curr.valor ? curr.valor : acc),
    0
  );

  const menorValor = dadosFilter.reduce(
    (acc, curr) => (acc > curr.valor ? curr.valor : acc),
    maiorValor
  );

  const days = dadosFilter.filter((d) => d.valor > media).length;
  return {
    media,
    maiorValor,
    menorValor,
    days,
  };
}

console.log("dados", calcula(dados));
// 4)
let faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calculaFaturamento(faturamento) {
  const total = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  );
  const result = Object.entries(faturamento).reduce(
    (result, [key, valor]) => ({
      ...result,
      [key]: (100 * valor) / total,
    }),
    {}
  );
  return result;
}

console.log(calculaFaturamento(faturamento));
//5)
function inversaoRecursiva(string, count = string.length, inver = "") {
  if (count > 0) {
    inver += string[--count];
    return inversaoRecursiva(string, count, inver);
  }
  if (count === 0) {
    return inver;
  }
}

let teste = "netflix";
console.log(inversaoRecursiva(teste));
