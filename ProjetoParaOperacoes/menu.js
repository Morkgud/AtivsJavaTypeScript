"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var operacoes_1 = require("./operacoes");
var prompt = require("async-prompt");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var opcao, _a, _b, numFatorial, _c, resultadoFatorial, baseExponenciacao, _d, expoenteExponenciacao, _e, resultadoExponenciacao, valorPorcentagem, _f, percentualPorcentagem, _g, resultadoPorcentagem, baseTriangulo, _h, alturaTriangulo, _j, resultadoAreaTriangulo;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    opcao = 0;
                    _k.label = 1;
                case 1:
                    if (!(opcao != 5)) return [3 /*break*/, 17];
                    console.log("Escolha uma opção:");
                    console.log("1 - Fatorial");
                    console.log("2 - Exponenciação");
                    console.log("3 - Porcentagem");
                    console.log("4 - Área do triângulo");
                    console.log("5 - Sair");
                    _a = parseInt;
                    return [4 /*yield*/, prompt("Opção escolhida: ")];
                case 2:
                    opcao = _a.apply(void 0, [_k.sent()]);
                    _b = opcao;
                    switch (_b) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 5];
                        case 3: return [3 /*break*/, 8];
                        case 4: return [3 /*break*/, 11];
                        case 5: return [3 /*break*/, 14];
                    }
                    return [3 /*break*/, 15];
                case 3:
                    _c = parseInt;
                    return [4 /*yield*/, prompt("Digite um número: ")];
                case 4:
                    numFatorial = _c.apply(void 0, [_k.sent()]);
                    resultadoFatorial = (0, operacoes_1.fatorial)(numFatorial);
                    console.log("O fatorial de ".concat(numFatorial, " \u00E9 ").concat(resultadoFatorial));
                    return [3 /*break*/, 16];
                case 5:
                    _d = parseInt;
                    return [4 /*yield*/, prompt("Digite a base: ")];
                case 6:
                    baseExponenciacao = _d.apply(void 0, [_k.sent()]);
                    _e = parseInt;
                    return [4 /*yield*/, prompt("Digite o expoente: ")];
                case 7:
                    expoenteExponenciacao = _e.apply(void 0, [_k.sent()]);
                    resultadoExponenciacao = (0, operacoes_1.exponenciacao)(baseExponenciacao, expoenteExponenciacao);
                    console.log("".concat(baseExponenciacao, " elevado a ").concat(expoenteExponenciacao, " \u00E9 igual a ").concat(resultadoExponenciacao));
                    return [3 /*break*/, 16];
                case 8:
                    _f = parseInt;
                    return [4 /*yield*/, prompt("Digite o valor: ")];
                case 9:
                    valorPorcentagem = _f.apply(void 0, [_k.sent()]);
                    _g = parseInt;
                    return [4 /*yield*/, prompt("Digite o percentual: ")];
                case 10:
                    percentualPorcentagem = _g.apply(void 0, [_k.sent()]);
                    resultadoPorcentagem = (0, operacoes_1.porcentagem)(valorPorcentagem, percentualPorcentagem);
                    console.log("".concat(percentualPorcentagem, "% de ").concat(valorPorcentagem, " \u00E9 igual a ").concat(resultadoPorcentagem));
                    return [3 /*break*/, 16];
                case 11:
                    _h = parseInt;
                    return [4 /*yield*/, prompt("Digite a base: ")];
                case 12:
                    baseTriangulo = _h.apply(void 0, [_k.sent()]);
                    _j = parseInt;
                    return [4 /*yield*/, prompt("Digite a altura: ")];
                case 13:
                    alturaTriangulo = _j.apply(void 0, [_k.sent()]);
                    resultadoAreaTriangulo = (0, operacoes_1.areaTriangulo)(baseTriangulo, alturaTriangulo);
                    console.log("A \u00E1rea do tri\u00E2ngulo de base ".concat(baseTriangulo, " e altura ").concat(alturaTriangulo, " \u00E9 igual a ").concat(resultadoAreaTriangulo));
                    return [3 /*break*/, 16];
                case 14:
                    console.log("Saindo...");
                    return [3 /*break*/, 16];
                case 15:
                    console.log("Opção inválida!");
                    return [3 /*break*/, 16];
                case 16:
                    console.log();
                    return [3 /*break*/, 1];
                case 17: return [2 /*return*/];
            }
        });
    });
}
main();
