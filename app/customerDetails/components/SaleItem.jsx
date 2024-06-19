import { Box, Card, HStack, Pressable, Text } from "@gluestack-ui/themed"
import { AntDesign } from '@expo/vector-icons'
import { useState } from "react"
import theme from "@/style/theme"
import { numberForMoney } from "@/services/numberForMoney"
import { formatDate } from "@/services/formatDate"
import Confirm from "@/components/Confirm"
import FormattedMoney from "@/components/FormattedMoney"

export default function SaleItem({ item, handleSaleDelete, handleSalePayment }) {
    const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false)
    const [showModalConfirmPayment, setShowModalConfirmPayment] = useState(false)

    const dataVenda = formatDate(item.dataVenda)

    return (
        <HStack
            justifyContent="space-between"
            alignItems="center"
            p={10}
            borderBottomWidth={2}
            borderColor={theme.backgroundColor}
        >
            <Box
                padding={4}
                justifyContent="space-between"
                alignItems="center"
                width="$4/6"
                gap={4}
            >
                <Box
                    gap={4}
                    width="$full"
                >
                    <Text color={theme.colorText} fontWeight="bold" fontSize={14}>
                        {item.fk.produto.tipo.nome} {item.fk.produto.nome}
                    </Text>

                </Box>
                <Box
                    width="$full"
                    flexDirection="row"
                    alignItems="center"
                    gap={16}
                >
                    <Text color={theme.colorText2} fontSize={13}>
                        {dataVenda}
                    </Text>
                    <Text color={theme.colorText2} fontSize={13}>
                        Qtd: {item.quantidade}
                    </Text>
                    <FormattedMoney 
                        value={item.fk.produto.valorVenda * item.quantidade}
                        color={theme.colorText2} fontSize={13}
                    />
                </Box>
            </Box>
            <Pressable
                p={4}
                //borderWidth={1}
                borderRadius={8}
                //borderColor={theme.colorDark}
                backgroundColor={theme.colorDark}
                alignItems="center"
                $active-bgColor={theme.colorDarkLight}
                onPress={() => setShowModalConfirmPayment(true)}
            >
                <Text fontSize={12} color={theme.colorLight}>Registrar</Text>
                <Text fontSize={12} color={theme.colorLight}>pagamento</Text>
            </Pressable>
            <Pressable
                onPress={() => setShowModalConfirmDelete(true)}
                p={4}
            >
                <AntDesign name="delete" size={24} color={theme.colorDark} />
            </Pressable>

            <Confirm
                showModal={showModalConfirmPayment}
                setShowModal={setShowModalConfirmPayment}
                message="Deseja registrar o pagamento desta venda?"
                onPress={() => handleSalePayment(item.id)}
            />

            <Confirm
                showModal={showModalConfirmDelete}
                setShowModal={setShowModalConfirmDelete}
                message="Deseja remover esta venda?"
                onPress={() => handleSaleDelete(item.id)}
            />
        </HStack>
    )
}