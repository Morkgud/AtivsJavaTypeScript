"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaTriangulo = exports.porcentagem = exports.exponenciacao = exports.fatorial = void 0;
function fatorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * fatorial(num - 1);
    }
}
exports.fatorial = fatorial;
function exponenciacao(base, expoente) {
    return Math.pow(base, expoente);
}
exports.exponenciacao = exponenciacao;
function porcentagem(valor, percentual) {
    return (valor * percentual) / 100;
}
exports.porcentagem = porcentagem;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
exports.areaTriangulo = areaTriangulo;
