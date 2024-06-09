import { Box, Card, FlatList, HStack, Text } from "@gluestack-ui/themed"
import ItemCustomerList from "./ItemCustomerList"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import theme from "@/style/theme"

export default function CustomerList({ data, onPress }) {
    return (
        <Card height={"72%"} pt={0} px={0} size="md" mt="$3" mx="$4">
            <HStack py={14} px={16} justifyContent="space-between" borderBottomWidth={1}>

                <HStack gap={10} alignItems="center">
                    <FontAwesome name="user-circle-o" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Cliente</Text>
                </HStack>

                <HStack gap={8} alignItems="center">
                    <FontAwesome5 name="dollar-sign" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Debito</Text>
                </HStack>

            </HStack>
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
        </Card>
    )
}
