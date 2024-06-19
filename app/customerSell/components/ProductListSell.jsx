import { Box, FlatList, HStack, Text } from "@gluestack-ui/themed"
import ItemProductListSell from "./ItemProductListSell"
import { Feather } from "@expo/vector-icons"


export default function ProductListSell({ data }) {
    // return (
    //     <Box height={190} marginTop={8} px={8} pb={12}>
    //         <HStack alignItems="center" ml={2}>
    //             <Text color={theme.colorDarkLight}>Produtos</Text>
    //             <Feather name="arrow-right" size={16} color={theme.colorDarkLight} />
    //         </HStack>
    //         {data?.length > 0
    //             ? <FlatList
    //                 showsHorizontalScrollIndicator={false}
    //                 horizontal
    //                 data={data}
    //                 renderItem={({ item }) => (
    //                     <ItemProductListSell product={item}/>
    //                 )}
    //             />
    //             : <Box flex={1} justifyContent="center" alignItems="center">
    //                 <Text>Escolha uma categoria!</Text>
    //             </Box>
    //         }
    //     </Box>
    // )
    return (
        <Box height={250} marginTop={8} px={8} pb={12}>
            <HStack alignItems="center" ml={2}>
                <Text color={theme.colorDarkLight}>Produtos</Text>
                <Feather name="arrow-down" size={16} color={theme.colorDarkLight} />
            </HStack>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <ItemProductListSell product={item} />
                    )}
                />
                : <Box flex={1} justifyContent="center" alignItems="center">
                    <Text>Escolha uma categoria!</Text>
                </Box>
            }
        </Box>
    )
}
