import { Box, Card, Pressable, Text } from "@gluestack-ui/themed"
import { AntDesign } from '@expo/vector-icons'
import { useState } from "react"
import theme from "@/style/theme"
import { numberForMoney } from "@/services/numberForMoney"
import { formatDate } from "@/services/formatDate"
import Confirm from "@/components/Confirm"

export default function SaleItem({ item, handleSaleDelete, handleSalePayment }) {
    const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false)
    const [showModalConfirmPayment, setShowModalConfirmPayment] = useState(false)
    
    const dataVenda = formatDate(item.dataVenda)

    return (
        <Card
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding={0}
            marginBottom={4}
        >
            <Box
                padding={8}
                justifyContent="space-between"
                alignItems="center"
                width="$4/6"
                gap={4}
            >
                <Box
                    gap={4}
                    width="$full"
                >
                    <Text color={theme.black} fontWeight="bold" fontSize={14}>
                        {item.fk.produto.tipo.nome}
                    </Text>
                    <Text color={theme.black} fontWeight="bold" fontSize={14}>
                        {item.fk.produto.nome}
                    </Text>
                </Box>
                <Box
                    width="$full"
                    flexDirection="row"
                    alignItems="center"
                    gap={16}
                >
                    <Text color={theme.black} fontSize={14}>
                        {dataVenda}
                    </Text>
                    <Text color={theme.black} fontSize={14}>
                        Quant: {item.quantidade}
                    </Text>
                    <Text color={theme.black} fontSize={14}>
                        {numberForMoney((item.fk.produto.valorVenda) * item.quantidade)}
                    </Text>
                </Box>
            </Box>
            <Pressable 
                px={4}
                borderWidth={1}
                borderRadius={5}
                alignItems="center"
                $active-bgColor={theme.colorDark}
                onPress={() => setShowModalConfirmPayment(true)}
            >
                <Text fontSize={12} color={theme.black}>Registrar</Text>
                <Text fontSize={12} color={theme.black}>Pagamento</Text>
            </Pressable>
            <Pressable 
                onPress={() => setShowModalConfirmDelete(true)} 
                p={4}
            >
                <AntDesign name="delete" size={24} color={theme.black} />
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
        </Card>
    )
}