import { Box, Card, Text } from "@gluestack-ui/themed"
import { Feather } from '@expo/vector-icons'
import { Pressable } from "@gluestack-ui/themed"
import { useDispatch } from "react-redux"
import { addProductToCart } from "@/redux/cart/actions"
import theme from "@/style/theme"
import { numberForMoney } from "@/services/numberForMoney"
import FormattedMoney from "@/components/FormattedMoney"

export default function ItemProductListSell({ product }) {
    const dispatch = useDispatch()

    const handleProductClick = () => {
        dispatch(addProductToCart(product))
    }

    return (
        <Box
            my={5}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width={"100%"}
            borderRadius={5}
        >
            <Box
                width={"85%"}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                borderRadius={5}
                backgroundColor={product.backgroundColor}
                borderColor={product.borderColor}
                borderWidth={2}
                height={40}
                px={8}
            >
                <Text color={product.textColor}>
                    {product.nome} {product?.tipo?.nome ? product.tipo.nome : ""}
                </Text>

                <FormattedMoney value={product.valorVenda} color={product.textColor}/>
            </Box>

            <Pressable
                onPress={handleProductClick}
                justifyContent="center"
                alignItems="center"
                borderRadius={5}
                backgroundColor={theme.colorDark}
                $active-bgColor={theme.colorLight}
                height={38}
                width={"12%"}
            >
                <Feather name="shopping-cart" size={24} color={theme.colorLight} />
            </Pressable>
        </Box >
    )
}