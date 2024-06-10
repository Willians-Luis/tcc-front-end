import { numberForMoney } from "@/services/numberForMoney";
import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import theme from "@/style/theme";

export default function CashListItem({ item, handleDeleteExpense }) {
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
                {/* <FontAwesome5 name="coins" size={16} color={theme.colorDark2} /> */}
                <Text color={theme.colorText} fontSize={14}>{item.descricao}</Text>
            </Box>

            <Box flexDirection="row" width={"40%"} justifyContent="space-between">
                <Box justifyContent="flex-start" flexDirection="row" gap={4}>
                    {item.tipo === "entrada" && (
                        <MaterialIcons name={"arrow-circle-up"} size={20} color="#29b806" />
                    )}

                    {item.tipo === "saida" && (
                        <MaterialIcons name={"arrow-circle-down"} size={20} color="#db1d04" />
                    )}
                    <Text color={theme.colorText} fontSize={14}>{numberForMoney(item.valor)}</Text>
                </Box>

                {(item.id !== "abc1" && item.id !== "abc2") ? (
                    <Pressable onPress={() => handleDeleteExpense(item.id)}>
                        <AntDesign name="delete" size={20} color={theme.colorText} />
                    </Pressable>
                ) : (<AntDesign name="lock1" size={20} color={theme.colorText} />)}
            </Box>

        </Box>
    )
}