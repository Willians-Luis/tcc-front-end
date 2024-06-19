import { Box, Text } from "@gluestack-ui/themed"
import { Feather } from '@expo/vector-icons'
import { Pressable } from "@gluestack-ui/themed"
import { useDispatch } from "react-redux"
import { addProductToCart } from "@/redux/cart/actions"
import theme from "@/style/theme"
import FormattedMoney from "@/components/FormattedMoney"
import { useState } from "react"

export default function ItemProductListSell({ product }) {
    const dispatch = useDispatch()

    const handleProductClick = () => {
        dispatch(addProductToCart(product))
    }

    // return (
    //     <Box
    //         width={150}
    //         height={150}
    //         alignItems="flex-start"
    //         justifyContent="space-between"
    //         p={4}
    //         pl={0}
    //     >
    //         <Box
    //             width={"95%"}
    //             height={"78%"}
    //             borderWidth={2}
    //             borderRadius={10}
    //             borderColor={product.borderColor}
    //             backgroundColor={product.backgroundColor}
    //             p={4}
    //         >
    //             <Text fontSize={14} color={product.textColor}>
    //                 {product.nome}
    //             </Text>
    //             <Text fontSize={12} color={product.textColor}>
    //                 {product?.tipo?.nome ? product.tipo.nome : ""}
    //             </Text>
    //             <FormattedMoney value={product.valorVenda} color={product.textColor} />
    //         </Box>

    //         <Pressable
    //             onPress={handleProductClick}
    //             justifyContent="center"
    //             alignItems="center"
    //             borderRadius={5}
    //             backgroundColor={theme.colorDark}
    //             $active-bgColor={theme.colorDarkLight}
    //             height={"20%"}
    //             width={"95%"}
    //         >
    //             <Text fontSize={12} color={theme.colorLight}>Adicionar ao carrinho</Text>
    //         </Pressable>
    //     </Box >
    // )

    return (
        <Box
            my={3}
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
                borderRadius={8}
                backgroundColor={product.backgroundColor}
                borderColor={product.borderColor}
                borderWidth={2}
                height={48}
                px={8}
                py={4}
            >
                <Box>
                    <Text fontSize={11} color={product.textColor}>
                        {product.tipo.nome}
                    </Text>
                    <Text color={product.textColor}>
                        {product.nome}
                    </Text>
                </Box>
                <FormattedMoney value={product.valorVenda} color={product.textColor} />
            </Box>

            <Pressable
                onPress={handleProductClick}
                justifyContent="center"
                alignItems="center"
                borderRadius={8}
                backgroundColor={theme.colorDark}
                $active-bgColor={theme.colorLight}
                height={44}
                width={"12%"}
            >
                <Feather name="shopping-cart" size={24} color={theme.colorLight} />
            </Pressable>
        </Box >
    )
}