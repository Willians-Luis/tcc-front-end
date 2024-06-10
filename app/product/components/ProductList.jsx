import { Center, FlatList, Text } from "@gluestack-ui/themed"
import ProductItem from "./ProductItem"
import theme from "@/style/theme"
import { HStack } from "@gluestack-ui/themed"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { Card } from "@gluestack-ui/themed"
import RoundButton from "@/components/RoundButton"

export default function ProductList({ data }) {
    return (
        <Card height={"65%"} pt={0} px={4} size="md">
            <HStack py={14} px={16} justifyContent="space-between">

                <HStack gap={10} alignItems="center">
                    <FontAwesome name="user-circle-o" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Produto</Text>
                </HStack>

                <HStack gap={8} alignItems="center">
                    <FontAwesome5 name="dollar-sign" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Preço</Text>
                </HStack>

            </HStack>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <ProductItem item={item} />
                    )}
                />
                : <Center flex={1}>
                    <Text color={theme.colorLight}>Escolha uma categoria!</Text>
                </Center>
            }
        </Card>
    )
}
