export const calculateDebtAmount = (arrayVendas) => {
    let value = 0
    arrayVendas.map((el) => {
        if (el.hasOwnProperty("fk")) {
            value += (el.fk.produto.valorVenda * el.quantidade)
        }
    })
    return value
}