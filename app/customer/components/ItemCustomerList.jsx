import FormattedMoney from "@/components/FormattedMoney";
import { calculateDebtAmount } from "@/services/calculateDebtAmount"
import { numberForMoney } from "@/services/numberForMoney"
import theme from "@/style/theme"
import { AntDesign, Feather } from '@expo/vector-icons';
import { Text, Pressable, HStack, Box } from "@gluestack-ui/themed"

export default function ItemCustomerList({ item, onPress }) {
    const vendas = item?.vendas.filter((venda) => venda.status == true)
    const valueSales = calculateDebtAmount(vendas)

    return (
        <Pressable
            onPress={() => onPress(item)}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            px={16}
            py={11}
            borderBottomWidth={2}
            borderColor={theme.backgroundColor}
        >
            <HStack alignItems="center" gap={10}>
                {/* <Feather name="user" size={18} color={theme.colorDarkLight} /> */}
                <Box>
                    <Text color={theme.colorText} fontWeight="bold">{item.nome}</Text>
                    <HStack alignItems="center" gap={4}>
                        <Feather name="phone" size={12} color={theme.colorText2} />
                        <Text color={theme.colorText2} fontSize={11}>{item.telefone}</Text>
                    </HStack>

                </Box>
            </HStack>
            <FormattedMoney
                value={valueSales}
                color={valueSales > 0 ? "#f00" : theme.colorText2}
                fontSize={15}
            />
        </Pressable>
    )
}