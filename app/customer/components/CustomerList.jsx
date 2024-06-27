import { Box, Card, Center, FlatList, HStack, Pressable, Text } from "@gluestack-ui/themed"
import ItemCustomerList from "./ItemCustomerList"
import { AntDesign, Feather } from "@expo/vector-icons"
import theme from "@/style/theme"

export default function CustomerList({ data, onPress, navigation }) {
    return (
        <Card height={"78%"} p={0} borderRadius={8}>
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
            <Pressable
                onPress={navigation}
                flexDirection="row"
                width={"100%"}
                alignItems="center"
                justifyContent="space-between"
                px={8}
                py={12}
                borderTopWidth={2}
                borderColor={theme.backgroundColor}
            >
                <Text 
                    color={theme.colorDark}
                    fontSize={18} 
                    //fontWeight="bold"
                >Adicionar cliente</Text>
                <AntDesign name="right" size={14} color={theme.colorDark} />
            </Pressable>

        </Card>
    )
}
