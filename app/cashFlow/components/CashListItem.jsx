import { numberForMoney } from "@/services/numberForMoney";
import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function CashListItem({ item, handleDeleteExpense }) {
    return (
        <Box
            key={item.id}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mt={8}
            p={8}
        >
            <Box width="$2/4">
                <Text fontSize={14}>{item.descricao}</Text>
            </Box>

            <Text fontSize={14}>{numberForMoney(item.valor)}</Text>

            <Box flexDirection="row" width={60} justifyContent="space-between">
                {item.tipo === "entrada" && (
                    <MaterialIcons name={"arrow-circle-up"} size={20} color="#29b806" />
                )}

                {item.tipo === "saida" && (
                    <MaterialIcons name={"arrow-circle-down"} size={20} color="#db1d04" />
                )}

                {(item.id !== "abc1" && item.id !== "abc2") ? (
                    <Pressable onPress={() => handleDeleteExpense(item.id)}>
                        <AntDesign name="delete" size={20} color="#000" />
                    </Pressable>
                ) : (<AntDesign name="delete" size={20} color="#fff" />)}
            </Box>

        </Box>
    )
}