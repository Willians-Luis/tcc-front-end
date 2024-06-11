import { Box, HStack, Text } from "@gluestack-ui/themed"
import { Pressable } from "@gluestack-ui/themed"
import { useState } from "react"
import ProductDetails from "./ProductDetails"
import theme from "@/style/theme"
import FormattedMoney from "@/components/FormattedMoney"

export default function ProductItem({ item }) {
    const [showModal, setShowModal] = useState(false)

    const handleVisibility = () => {
        setShowModal(!showModal)
    }

    return (
        <HStack width={"100%"}>
            <Pressable
                onPress={handleVisibility}
                my="$1"
                borderRadius={5}
                padding={6}
                flexDirection="row"
                backgroundColor={item.backgroundColor}
                borderWidth={2}
                borderColor={item.borderColor}
                width={"75%"}
            >
                <Box
                    width={"100%"}
                    px={8}
                >
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        py={8}
                    >
                        <Text color={item.textColor} fontWeight="bold">
                            {item.nome}
                        </Text>
                        <FormattedMoney value={item.valorVenda} color={item.textColor} fontWeight="bold" />
                    </Box>
                </Box>
            </Pressable>

            <HStack flex={1} borderWidth={2} px={8} m="$1" borderRadius={5} borderColor={theme.colorDark}
                alignItems="center" justifyContent="center" backgroundColor={theme.colorDark}>
                <HStack>
                    <Text fontWeight="bold" color={theme.colorLight}>-  </Text>
                    <Text color={theme.colorDarkLight}>{item.quantidade}</Text>
                    <Text fontWeight="bold" color={theme.colorLight}>  +</Text>
                </HStack>
            </HStack>

            <ProductDetails showModal={showModal} setShowModal={setShowModal} item={item} />
        </HStack>
    )
}