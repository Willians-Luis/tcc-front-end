import { Box, Card, FlatList, Text } from "@gluestack-ui/themed"
import CashListItem from "./CashListItem"

export default function CashList({ data, handleDeleteExpense }) {

    return (
        <Card height={300}>
            <Box
                flexDirection="row"
                borderBottomWidth={1}
                px={5}
                pb={4}
            >
                <Text>Descrição</Text>
                <Text marginLeft={123}>Valor</Text>
                <Text marginLeft={50}>Tipo</Text>
            </Box>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <CashListItem item={item} handleDeleteExpense={handleDeleteExpense}/>
                    )}
                />
                : <Box>
                    <Text>Nenhum registro encontrado!</Text>
                </Box>
            }
        </Card>
    )
}