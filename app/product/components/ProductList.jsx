import { Box, Center, FlatList, Text } from "@gluestack-ui/themed"
import ProductItem from "./ProductItem"
import theme from "@/style/theme"
import { HStack } from "@gluestack-ui/themed"
import { AntDesign, Feather } from "@expo/vector-icons"
import { Card } from "@gluestack-ui/themed"
import Loading from "@/components/Loading"
import { Pressable } from "@gluestack-ui/themed"

export default function ProductList({ data = false, navigation }) {
    return (
        <Card height={"68%"} p={0} mx={8} borderRadius={8}>
            <HStack py={14} justifyContent="space-between" px={8}>
                <HStack gap={4} alignItems="center">
                    <Feather name="list" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Produto</Text>
                </HStack>

                <HStack gap={20}>
                    <HStack gap={4} alignItems="center">
                        <Feather name="dollar-sign" size={18} color={theme.colorDarkLight} />
                        <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Preço</Text>
                    </HStack>

                    <HStack gap={4} alignItems="center" mr={5}>
                        <Feather name="tool" size={18} color={theme.colorDarkLight} />
                        <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Estoque</Text>
                    </HStack>
                </HStack>
            </HStack>
            
                {data?.length > 0 && (<FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <ProductItem item={item} />
                    )}
                />)}

                {!data && (<Center flex={1}>
                    <Loading />
                </Center>)}

                {data?.length === 0 && (<Center flex={1}>
                    <Text color={theme.colorText}>Nenhum registro encontrado!</Text>
                </Center>)}
            
            <Pressable
                onPress={navigation}
                flexDirection="row"
                width={"100%"}
                alignItems="center"
                justifyContent="space-between"
                py={12} px={8}
                borderTopWidth={2}
                borderColor={theme.backgroundColor}
            >
                <Text
                    color={theme.colorDark}
                    fontSize={18}
                >Adicionar produto</Text>
                <AntDesign name="right" size={14} color={theme.colorDark} />
            </Pressable>
        </Card>
    )
}
