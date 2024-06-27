import { Box, Card, FlatList, HStack, Text } from "@gluestack-ui/themed"
import { useDispatch, useSelector } from "react-redux"
import SaleItem from "./SaleItem"
import { useState } from "react"
import { apiDeleteSale, apiPaySale } from "@/api/saleRoute"
import { apiGetCustomer } from "@/api/customerRoute"
import { addCustomerAction } from "@/redux/customer/actions"
import Alert from "@/components/Alert"
import { AntDesign, Feather } from "@expo/vector-icons"
import { Pressable } from "@gluestack-ui/themed"

export default function SalesList({ data, navigation }) {
    const [showModalAlertDelete, setShowModalAlertDelete] = useState(false)
    const [showModalAlertPayment, setShowModalAlertPayment] = useState(false)

    const newdata = data?.filter((venda) => venda.status == true)

    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)

    const dispatch = useDispatch()

    const handleSaleDelete = async (id) => {
        const response = await apiDeleteSale(id, user.accessToken)
        if (response) {
            const resp = await apiGetCustomer(customer.id, user.accessToken)
            if (resp) dispatch(addCustomerAction(resp))
        }
        setShowModalAlertDelete(true)
    }

    const handleSalePayment = async (id) => {
        const response = await apiPaySale(id, user.accessToken)
        if (response) {
            const resp = await apiGetCustomer(customer.id, user.accessToken)
            if (resp) dispatch(addCustomerAction(resp))
        }
        setShowModalAlertPayment(true)
    }

    return (
        <Card height={"64%"} px={0} mx={8} pb={0}>
            <HStack alignItems="center" gap={4} mx={8}>
                <Feather name="shopping-cart" size={18} color={theme.colorDarkLight} />
                <Text fontSize={18} fontWeight="bold" color={theme.colorText}>
                    Vendas
                </Text>
            </HStack>
            {newdata?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={newdata}
                    renderItem={({ item }) => (
                        <SaleItem
                            item={item}
                            handleSaleDelete={handleSaleDelete}
                            handleSalePayment={handleSalePayment}
                        />
                    )}
                />
                : <Box flex={1} justifyContent="center" alignItems="center">
                    <Text>Nenhum registro encontrado!</Text>
                </Box>
            }
            <Pressable
                onPress={navigation}
                flexDirection="row"
                width={"100%"}
                alignItems="center"
                justifyContent="space-between"
                px={8}
                py={12}
                borderTopWidth={2}
                borderColor={theme.backgroundColor}
            >
                <Text
                    color={theme.colorDark}
                    fontSize={18}
                //fontWeight="bold"
                >Adicionar venda</Text>
                <AntDesign name="right" size={14} color={theme.colorDark} />
            </Pressable>

            <Alert
                showModal={showModalAlertDelete}
                setShowModal={setShowModalAlertDelete}
                message="Venda removida com sucesso!"
            />

            <Alert
                showModal={showModalAlertPayment}
                setShowModal={setShowModalAlertPayment}
                message="Pagamento registrado com sucesso!"
            />
        </Card>
    )
}
