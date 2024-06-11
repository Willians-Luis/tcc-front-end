import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import theme from "@/style/theme";
import FormattedMoney from "@/components/FormattedMoney";
import { useState } from "react";
import { apiDeleteExpenses } from "@/api/expensesRoute";
import Confirm from "@/components/Confirm";
import Alert from "@/components/Alert";
import { useSelector } from "react-redux";

export default function CashListItem({ item, getExpensesAndSaleByYearAndMonth }) {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const [showModal, setShowModal] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [message, setMessage] = useState("")

    const deleteExpense = async () => {
        const response = await apiDeleteExpenses(item.id, user.accessToken)
        if (response) {
            setMessage("Valor excluido com sucesso!")
            setShowModal(true)
            getExpensesAndSaleByYearAndMonth()
        } else {
            setMessage("Não foi possível excluir o valor!")
            setShowModal(true)
        }
    }

    const handleDeleteExpense = () => {
        setShowModalConfirm(true)
    }

    return (
        <Box
            key={item.id}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottomWidth={2}
            borderColor={theme.backgroundColor}
            py={16}
            p={8}
        >
            <Box width={"60%"} flexDirection="row" alignItems="center" gap={6}>
                <Box justifyContent="flex-start" flexDirection="row" gap={4}>
                    {item.tipo === "entrada" && (
                        <MaterialIcons name={"arrow-circle-up"} size={20} color="#29b806" />
                    )}

                    {item.tipo === "saida" && (
                        <MaterialIcons name={"arrow-circle-down"} size={20} color="#db1d04" />
                    )}
                </Box>
                <Text color={theme.colorText} fontSize={14}>{item.descricao}</Text>
            </Box>

            <Box flexDirection="row" width={"40%"} justifyContent="space-between">
                <Box justifyContent="flex-start" flexDirection="row" gap={4} alignItems="center">
                    <FormattedMoney value={item.valor} fontSize={14}
                        color={item.tipo === "entrada" ? "#29b806" : "#db1d04"} />
                </Box>

                {(item.id !== "abc1" && item.id !== "abc2") ? (
                    <Pressable onPress={handleDeleteExpense}>
                        <AntDesign name="delete" size={20} color={theme.colorText} />
                    </Pressable>
                ) : (<AntDesign name="lock1" size={20} color={theme.colorText} />)}
            </Box>

            <Confirm
                showModal={showModalConfirm}
                setShowModal={setShowModalConfirm}
                onPress={deleteExpense}
                message={"Deseja excluir este registro?"}
            />

            <Alert
                showModal={showModal}
                setShowModal={setShowModal}
                message={message}
            />
        </Box>
    )
}