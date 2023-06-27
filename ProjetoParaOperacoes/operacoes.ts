export function fatorial(num: number): number {
  if (num <= 1) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

export function exponenciacao(base: number, expoente: number): number {
  return Math.pow(base, expoente);
}

export function porcentagem(valor: number, percentual: number): number {
  return (valor * percentual) / 100;
}

export function areaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}