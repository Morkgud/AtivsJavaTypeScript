import { fatorial, exponenciacao, porcentagem, areaTriangulo } from "./operacoes";

const prompt = require("async-prompt");

async function main() {
  let opcao = 0;
  while (opcao != 5) {
    console.log("Escolha uma opção:");
    console.log("1 - Fatorial");
    console.log("2 - Exponenciação");
    console.log("3 - Porcentagem");
    console.log("4 - Área do triângulo");
    console.log("5 - Sair");

    opcao = parseInt(await prompt("Opção escolhida: "));

    switch (opcao) {
      case 1:
        const numFatorial = parseInt(await prompt("Digite um número: "));
        const resultadoFatorial = fatorial(numFatorial);
        console.log(`O fatorial de ${numFatorial} é ${resultadoFatorial}`);
        break;
      case 2:
        const baseExponenciacao = parseInt(await prompt("Digite a base: "));
        const expoenteExponenciacao = parseInt(await prompt("Digite o expoente: "));
        const resultadoExponenciacao = exponenciacao(baseExponenciacao, expoenteExponenciacao);
        console.log(`${baseExponenciacao} elevado a ${expoenteExponenciacao} é igual a ${resultadoExponenciacao}`);
        break;
      case 3:
        const valorPorcentagem = parseInt(await prompt("Digite o valor: "));
        const percentualPorcentagem = parseInt(await prompt("Digite o percentual: "));
        const resultadoPorcentagem = porcentagem(valorPorcentagem, percentualPorcentagem);
        console.log(`${percentualPorcentagem}% de ${valorPorcentagem} é igual a ${resultadoPorcentagem}`);
        break;
      case 4:
        const baseTriangulo = parseInt(await prompt("Digite a base: "));
        const alturaTriangulo = parseInt(await prompt("Digite a altura: "));
        const resultadoAreaTriangulo = areaTriangulo(baseTriangulo, alturaTriangulo);
        console.log(`A área do triângulo de base ${baseTriangulo} e altura ${alturaTriangulo} é igual a ${resultadoAreaTriangulo}`);
        break;
      case 5:
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida!");
        break;
    }
    console.log();
  }
}

main();
