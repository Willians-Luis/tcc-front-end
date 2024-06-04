import { Box, Center, FlatList, Text } from "@gluestack-ui/themed"
import ProductItem from "./ProductItem"

export default function ProductList({ data }) {
    return (
        <Box height={400}>
            {data?.length > 0
                ? <FlatList
                showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <ProductItem item={item} />
                    )}
                />
                : <Center flex={1}>
                    <Text>Escolha uma categoria!</Text>
                </Center>
            }
        </Box>
    )
}
