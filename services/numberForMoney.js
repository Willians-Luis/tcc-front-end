export function numberForMoney(valor) {
    const valorFormatado = valor.toFixed(2).replace('.', ',')
    return `R$ ${valorFormatado}`
}