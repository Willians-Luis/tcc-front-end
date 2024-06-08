import { calculateDebtAmount } from "@/services/calculateDebtAmount"
import { numberForMoney } from "@/services/numberForMoney"
import theme from "@/style/theme"
import { Card, Text, Pressable } from "@gluestack-ui/themed"

export default function ItemCustomerList({ item, onPress }) {
    const vendas = item?.vendas.filter((venda) => venda.status == true)
    const valueSales = calculateDebtAmount(vendas)

    return (
        <Pressable onPress={() => onPress(item)}>
            <Card
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                variant="elevated"
                elevation={6}
                // borderWidth={1}
                // borderColor={theme.colorLight}
                backgroundColor={theme.containerColor}
                my={4}
                padding={13}
            >
                <Text color={theme.colorLight} fontWeight="bold">{
                    item.nome
                }</Text>
                <Text color={valueSales > 0 ? "#ff0000" : theme.colorLight}fontWeight="bold">{
                    numberForMoney(valueSales)
                }</Text>
            </Card>
        </Pressable>
    )
}