import { Box, Card, Pressable, Text } from "@gluestack-ui/themed";
import { useDispatch, } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import { decreaseQuantity, increaseQuantity, removeProductFromCart } from "@/redux/cart/actions";
import { numberForMoney } from "@/services/numberForMoney";
import theme from "@/style/theme";


export default function CartItem({ product }) {
    const dispatch = useDispatch()

    const handleIncreaseQuantityClick = () => {
        dispatch(increaseQuantity(product))
    }

    const handleDecreaseQuantityClick = () => {
        dispatch(decreaseQuantity(product))
    }

    const handleRemoveClick = () => {
        dispatch(removeProductFromCart(product))
    }

    return (
        <Card
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={4}
            borderRadius={5}
            p={0}
            paddingLeft={8}
        >
            <Text color={theme.black} fontWeight="bold">
                {product.nome}
            </Text>
            <Box flexDirection="row" gap={8}>
                <Text color={theme.black} fontWeight="bold">
                    {numberForMoney(product.valorVenda)}
                </Text>
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    borderWidth={1}
                    gap={8}
                    borderRadius={8}
                >
                    <Pressable
                        onPress={handleDecreaseQuantityClick}
                        alignItems="center"
                        width={24}
                    >
                        <Text fontWeight="bold" fontSize={18}>-</Text>
                    </Pressable>
                    <Text color={theme.black} fontWeight="bold">
                        {product.quantidade}
                    </Text>
                    <Pressable
                        onPress={handleIncreaseQuantityClick}
                        alignItems="center"
                        width={24}
                    >
                        <Text fontWeight="bold">+</Text>
                    </Pressable>
                </Box>
                <Pressable onPress={handleRemoveClick}>
                    <AntDesign name="delete" size={24} color="black" />
                </Pressable>
            </Box>

        </Card>
    )
}