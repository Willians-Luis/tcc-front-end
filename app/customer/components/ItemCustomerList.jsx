import { calculateDebtAmount } from "@/services/calculateDebtAmount"
import { numberForMoney } from "@/services/numberForMoney"
import theme from "@/style/theme"
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import { Text, Pressable, HStack, Box } from "@gluestack-ui/themed"

export default function ItemCustomerList({ item, onPress }) {
    const vendas = item?.vendas.filter((venda) => venda.status == true)
    const valueSales = calculateDebtAmount(vendas)

    return (
        <Pressable
            onPress={() => onPress(item)}
            flexDirection="row"
            justifyContent="space-between"
            padding={14}
            borderBottomWidth={2}
            borderColor={theme.backgroundColor}
        >
            <HStack alignItems="center" gap={10}>
                <Feather name="user" size={18} color={theme.colorDarkLight} />
                <Box>
                    <Text color={theme.colorText} fontWeight="bold">{item.nome}</Text>
                    <Text color={theme.colorText2} fontSize={11}>{item.telefone}</Text>
                </Box>
            </HStack>

            <HStack alignItems="center" gap={20}>
                <Text color={valueSales > 0 ? "#f00" : theme.colorText2} fontSize={15}>
                    {numberForMoney(valueSales)}
                </Text>
                <AntDesign name="right" size={14} color={theme.colorDarkLight} />
            </HStack>

        </Pressable>
    )
}