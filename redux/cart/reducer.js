import cartActionTypes from "./action-types"

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_PRODUCT:
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            )
            if (productIsAlreadyInCart) {
                return {
                    ...state, products: state.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantidade: product.quantidade + 1 }
                            : product
                    )
                }
            }
            return {
                ...state,
                products: [...state.products, { ...action.payload, quantidade: 1 }]
            }

        case cartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload.id
                )
            }

        case cartActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                products: state.products
                    .map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantidade: product.quantidade + 1 }
                            : product
                    )
            }

        case cartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                products: state.products
                    .map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantidade: product.quantidade - 1 }
                            : product
                    )
                    .filter((product) => product.quantidade > 0)
            }


        case cartActionTypes.CLEAN_CART:
            return {
                ...state, products: []
            }

        default:
            return state
    }
}

export default cartReducer