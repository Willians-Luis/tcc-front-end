import { Box, Card, Text } from "@gluestack-ui/themed"
import { Feather } from '@expo/vector-icons'
import { Pressable } from "@gluestack-ui/themed"
import { useDispatch } from "react-redux"
import { addProductToCart } from "@/redux/cart/actions"
import theme from "@/style/theme"
import { numberForMoney } from "@/services/numberForMoney"

export default function ItemProductListSell({ product }) {
    const dispatch = useDispatch()

    const handleProductClick = () => {
        dispatch(addProductToCart(product))
    }

    return (
        <Card
            variant="elevated"
            my={5}
            p={0}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
            backgroundColor={product.backgroundColor}
            borderWidth={1}
            borderColor={theme.colorLight}
        >
            <Box width="$3/4" padding={8}>
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text color={theme.colorLight} fontWeight="bold">
                        {product.nome} {product?.tipo?.nome ? product.tipo.nome : ""}
                    </Text>
                    <Text color={theme.colorLight} fontWeight="bold">
                        {numberForMoney(product.valorVenda)}
                    </Text>
                </Box>
            </Box>
            <Pressable
                onPress={handleProductClick}
                height={40}
                width={60}
                justifyContent="center"
                alignItems="center"
                backgroundColor={theme.backgroundColor}
                borderBottomRightRadius={5}
                borderTopRightRadius={5}
                borderWidth={1}
                borderColor={theme.colorLight}
                $active-bg={theme.colorDark}
                $active-bgColor={theme.colorLight}
            >
                <Feather name="shopping-cart" size={24} color={theme.colorLight} />
            </Pressable>
        </Card>
    )
}