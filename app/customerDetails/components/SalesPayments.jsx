import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { calculateDebtAmount } from "@/services/calculateDebtAmount";
import { addCustomerAction } from "@/redux/customer/actions";
import { apiGetCustomer } from "@/api/customerRoute";
import { apiPayAllSales } from "@/api/saleRoute";
import Alert from "@/components/Alert";
import Confirm from "@/components/Confirm";
import theme from "@/style/theme";
import { numberForMoney } from "@/services/numberForMoney";


export default function SalesPayments({ customer }) {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [showModal, setShowModal] = useState(false)
    const [showModalAlert, setShowModalAlert] = useState(false)
    const dispatch = useDispatch()

    const vendas = customer?.vendas.filter((venda) => venda.status == true)
    const valueSales = calculateDebtAmount(vendas)

    const handlePayment = async () => {
        const response = await apiPayAllSales(
            customer.id, valueSales, 0, user.accessToken
        )
        if (response) {
            const resp = await apiGetCustomer(
                customer.id, user.accessToken
            )
            if (resp) dispatch(addCustomerAction(resp))
        }
        setShowModalAlert(true)
    }

    return (
        <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            pl={5}
        >
            <Text color={theme.colorLight}>{numberForMoney(valueSales)}</Text>
            <Pressable
                px={4}
                borderWidth={1}
                borderRadius={5}
                alignItems="center"
                padding={5}
                backgroundColor={theme.colorDark}
                $active-bgColor={theme.colorDark}
                onPress={() => setShowModal(true)}
            >
                <Text color={theme.colorLight} fontWeight="bold">Registrar Pagamento</Text>
            </Pressable>
            <Confirm
                showModal={showModal}
                setShowModal={setShowModal}
                message={`Deseja registrar o pagamento da conta do cliente ${customer.nome}?`}
                onPress={handlePayment}
            />
            <Alert
                showModal={showModalAlert}
                setShowModal={setShowModalAlert}
                message="Pagamento Registrado com sucesso!"
            />
        </Box>
    )
}