import { Box, Card, Text } from "@gluestack-ui/themed"
import { Pressable } from "@gluestack-ui/themed"
import { useState } from "react"
import ProductDetails from "./ProductDetails"
import theme from "@/style/theme"
import { numberForMoney } from "@/services/numberForMoney"

export default function ProductItem({ item }) {
    const [showModal, setShowModal] = useState(false)

    const handleVisibility = () => {
        setShowModal(!showModal)
    }

    return (
        <Pressable onPress={handleVisibility}>
            <Card
                my="$1"
                padding={6}
                flexDirection="row"
                backgroundColor={theme.white}
            >
                <Box
                    width="$full"
                    px={8}
                >
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        py={8}
                    >
                        <Text color={theme.black} fontWeight="bold">
                            {item.nome} {item?.tipo?.nome ? item.tipo.nome : ""}
                        </Text>
                        <Text color={theme.black} fontWeight="bold">
                            {numberForMoney(item.valorVenda)}
                        </Text>
                    </Box>
                </Box>
            </Card>
            <ProductDetails showModal={showModal} setShowModal={setShowModal} item={item} />
        </Pressable>
    )
}