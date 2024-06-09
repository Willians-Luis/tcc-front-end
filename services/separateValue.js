export function separateReal(valor) {
    const integerPart = Math.floor(valor)
    return integerPart
}

export function separateCentavo(valor) {
    const integerPart = Math.floor(valor)
    const fractionalPart = valor - integerPart
    return fractionalPart
}