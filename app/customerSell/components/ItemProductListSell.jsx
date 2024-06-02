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
            my="$1"
            p={0}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
        >
            <Box width="$3/4" padding={8}>
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text color={theme.black} fontWeight="bold">
                        {product.nome} {product?.tipo?.nome ? product.tipo.nome : ""}
                    </Text>
                    <Text color={theme.black} fontWeight="bold">
                        {numberForMoney(product.valorVenda)}
                    </Text>
                </Box>
            </Box>
            <Pressable
                onPress={handleProductClick}
                height={40}
                width={60}
                backgroundColor={theme.colorDark}
                justifyContent="center"
                alignItems="center"
                borderBottomRightRadius={8}
                borderTopRightRadius={8}
                $active-bg={theme.colorDark}
                $active-bgColor={theme.colorLight}
            >
                <Feather name="shopping-cart" size={30} color={theme.backgroundColor} />
            </Pressable>
        </Card>
    )
}