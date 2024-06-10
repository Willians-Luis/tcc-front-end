import { Center, FlatList, Text } from "@gluestack-ui/themed"
import ProductItem from "./ProductItem"
import theme from "@/style/theme"
import { HStack } from "@gluestack-ui/themed"
import { Feather } from "@expo/vector-icons"
import { Card } from "@gluestack-ui/themed"
import Loading from "@/components/Loading"

export default function ProductList({ data = false }) {
    return (
        <Card height={"60%"} pt={0} px={4} size="md" mx={16}>
            <HStack py={14} px={8} justifyContent="space-between">

                <HStack gap={10} alignItems="center">
                    <Feather name="list" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Produto</Text>
                </HStack>

                <HStack gap={8} alignItems="center">
                    <Feather name="dollar-sign" size={18} color={theme.colorDarkLight} />
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Preço</Text>
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
            </Center>
            )}

            {data?.length === 0 && (<Center flex={1}>
                <Text color={theme.colorText}>Escolha uma categoria!</Text>
            </Center>
            )}

        </Card>
    )
}
