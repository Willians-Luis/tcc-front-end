export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acc, curr) => acc + curr.valorVenda * curr.quantidade, 0
    )
}