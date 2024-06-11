import { Box, Card, FlatList, Text } from "@gluestack-ui/themed"
import CashListItem from "./CashListItem"
import theme from "@/style/theme"

export default function CashList({ data, getExpensesAndSaleByYearAndMonth }) {
    return (
        <Card height={"38%"} px={0} pt={2}>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <CashListItem item={item} getExpensesAndSaleByYearAndMonth={getExpensesAndSaleByYearAndMonth} />
                    )}
                />
                : <Box>
                    <Text color={theme.colorLight} >Nenhum registro encontrado!</Text>
                </Box>
            }
        </Card>
    )
}