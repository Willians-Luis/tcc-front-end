import { Box, HStack, Pressable, Text } from "@gluestack-ui/themed";
import { useDispatch, } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import { decreaseQuantity, increaseQuantity, removeProductFromCart } from "@/redux/cart/actions";
import theme from "@/style/theme";
import FormattedMoney from "@/components/FormattedMoney";
import { useState } from "react";


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
            borderRadius={8}
            backgroundColor={theme.colorLight}
            borderWidth={1}
            borderColor={theme.colorText}
            p={2}
            paddingLeft={8}
        >
            <Text color={theme.colorText} fontWeight="bold">
                {product.nome}
            </Text>
            <Box flexDirection="row" gap={8} alignItems="center">
                <FormattedMoney value={product.valorVenda} color={theme.colorText} fontWeight="bold"/>
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    //borderWidth={1}
                    gap={8}
                    borderRadius={8}
                    //borderColor={theme.colorDark}
                    backgroundColor={theme.colorDark}
                >
                    <Pressable
                        onPress={handleDecreaseQuantityClick}
                        alignItems="center"
                        width={24}
                    >
                        <Text color={theme.colorLight} fontWeight="bold" fontSize={18}>-</Text>
                    </Pressable>
                    <Text color={theme.colorLight} fontWeight="bold">
                        {product.quantidade}
                    </Text>
                    <Pressable
                        onPress={handleIncreaseQuantityClick}
                        alignItems="center"
                        width={24}
                    >
                        <Text color={theme.colorLight} fontWeight="bold">+</Text>
                    </Pressable>
                </Box>
                <Pressable onPress={handleRemoveClick}>
                    <AntDesign name="delete" size={24} color={theme.colorDark} />
                </Pressable>
            </Box>

        </HStack>
    )
}