import { Box, Card, Center, FlatList, HStack, Text } from "@gluestack-ui/themed"
import ItemCustomerList from "./ItemCustomerList"
import { Feather } from "@expo/vector-icons"
import theme from "@/style/theme"

export default function CustomerList({ data, onPress }) {
    return (
        <Card height={"70.5%"} pt={0} px={0} size="md" >
            <HStack py={14} px={8} justifyContent="space-between" borderBottomWidth={2} borderColor={theme.backgroundColor}>

                <HStack gap={4} alignItems="center">
                    <Feather name="user" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Cliente</Text>
                </HStack>

                <HStack gap={4} alignItems="center">
                    <Feather name="dollar-sign" size={18} color={theme.colorDarkLight} />
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
                    keyExtractor={(item) => item.id}
                />
                : <Center flex={1}>
                    <Text>Nenhum registro encontrado!</Text>
                </Center>
            }
        </Card>
    )
}
