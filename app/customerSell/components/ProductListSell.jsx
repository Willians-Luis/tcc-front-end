import { Box, FlatList, Text } from "@gluestack-ui/themed"
import ItemProductListSell from "./ItemProductListSell"


export default function ProductListSell({ data }) {
    return (
        <Box height={210} marginTop={8} px={8} pb={12}>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <ItemProductListSell product={item}/>
                    )}
                />
                : <Box flex={1} justifyContent="center" alignItems="center">
                    <Text>Escolha uma categoria!</Text>
                </Box>
            }
        </Box>
    )
}
