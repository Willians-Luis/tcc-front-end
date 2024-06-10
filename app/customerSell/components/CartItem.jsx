import { Box, Card, HStack, Pressable, Text } from "@gluestack-ui/themed";
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
        <HStack
            alignItems="center"
            justifyContent="space-between"
            marginBottom={4}
            borderRadius={5}
            backgroundColor={theme.colorLight}
            borderWidth={1}
            borderColor={theme.colorText}
            p={0}
            paddingLeft={8}
        >
            <Text color={theme.colorText} fontWeight="bold">
                {product.nome}
            </Text>
            <Box flexDirection="row" gap={8}>
                <Text color={theme.colorText} fontWeight="bold">
                    {numberForMoney(product.valorVenda)}
                </Text>
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    borderWidth={1}
                    gap={8}
                    borderRadius={8}
                    borderColor={theme.colorText}
                >
                    <Pressable
                        onPress={handleDecreaseQuantityClick}
                        alignItems="center"
                        width={24}
                    >
                        <Text color={theme.colorText} fontWeight="bold" fontSize={18}>-</Text>
                    </Pressable>
                    <Text color={theme.colorText} fontWeight="bold">
                        {product.quantidade}
                    </Text>
                    <Pressable
                        onPress={handleIncreaseQuantityClick}
                        alignItems="center"
                        width={24}
                    >
                        <Text color={theme.colorText} fontWeight="bold">+</Text>
                    </Pressable>
                </Box>
                <Pressable onPress={handleRemoveClick}>
                    <AntDesign name="delete" size={24} color={theme.colorText} />
                </Pressable>
            </Box>

        </HStack>
    )
}