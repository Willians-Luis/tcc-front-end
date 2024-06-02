import { Box, FlatList, Text } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Alert from "@/components/Alert";
import Confirm from "@/components/Confirm";
import { cleanCart } from "@/redux/cart/actions";
import Button from "@/components/Button";
import { addCustomerAction } from "@/redux/customer/actions";
import { apiPostSales } from "@/api/saleRoute";
import { apiGetCustomer } from "@/api/customerRoute";
import { selectProductsTotalPrice } from "@/redux/cart/cart.selectors";
import theme from "@/style/theme";
import { numberForMoney } from "@/services/numberForMoney";

export default function ShoppingCart({ customer }) {
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [showModalAlert, setShowModalAlert] = useState(false)

    const { products } = useSelector(rootReducer => rootReducer.cartReducer)
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const productsTotalPrice = useSelector(selectProductsTotalPrice)

    const dispatch = useDispatch()

    const handleCleanCartClick = () => {
        dispatch(cleanCart())
    }

    const handleRegisterSales = async () => {
        products.map(async (prod) => {
            const sale = {
                pk: {
                    produto: { id: prod.id },
                    cliente: { id: customer.id }
                },
                quantidade: prod.quantidade
            }
            const response = await apiPostSales(sale, user.accessToken)
            if (!response) {
                setMessage(
                    `Ocorreu algum erro na venda!`
                )
                setShowModal(true)
                return
            }
        })
        setShowModalAlert(true)
        handleCleanCartClick()
        const resp = await apiGetCustomer(customer.id, user.accessToken)
        if (resp) dispatch(addCustomerAction(resp))
    }

    useEffect(() => {
        handleCleanCartClick()
    }, [])

    return (
        <Box width="$full" borderRadius={10}>
            <Box height={118}>
                {products?.length > 0
                    ? <FlatList
                        showsVerticalScrollIndicator={false}
                        data={products}
                        renderItem={({ item }) => <CartItem
                            product={item}
                        />}
                    />
                    : <Box
                        flex={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text>Agardando produtos!</Text>
                    </Box>
                }

            </Box>
            <Box
                display={products?.length > 0 ? "flex" : "none"}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                height={45}
                px={4}
            >
                <Box
                    flexDirection="row"
                    alignItems="center"
                    px={4}
                    gap={8}
                >
                    <Text color={theme.black} fontWeight="bold">Valor Total:</Text>
                    <Text color={theme.black} fontWeight="bold">
                        {numberForMoney(productsTotalPrice)}
                    </Text>
                </Box>
                <Button
                    onPress={() => setShowModalConfirm(true)}
                    title="Registrar"
                    height={35}
                    bgColor={theme.colorDark}
                />
            </Box>

            <Confirm
                showModal={showModalConfirm}
                setShowModal={setShowModalConfirm}
                message="Deseja registrar estas vendas?"
                onPress={handleRegisterSales}
            />

            <Alert
                showModal={showModalAlert}
                setShowModal={setShowModalAlert}
                message="Venda registrada com sucesso!"
            />
        </Box>
    )
} 