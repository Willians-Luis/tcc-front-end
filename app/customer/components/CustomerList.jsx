import { Box, FlatList, Text } from "@gluestack-ui/themed"
import ItemCustomerList from "./ItemCustomerList"

export default function CustomerList({ data, onPress }) {
    return (
        <Box height={350}>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <ItemCustomerList item={item} onPress={onPress} />
                    )}
                />
                : <Box>
                    <Text>Nenhum registro encontrado!</Text>
                </Box>
            }
        </Box>
    )
}
