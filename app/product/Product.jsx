import { useState } from "react";
import { Card, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import ProductList from "./components/ProductList";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import theme from "@/style/theme";
import RoundButton from "@/components/RoundButton";
import { useNavigation } from "expo-router";
import { Box } from "@gluestack-ui/themed";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function Product() {
    const [data, setData] = useState(false)
    const navigation = useNavigation()

    const handleCategory = (data) => {
        setData(data)
    }

    return (
        <VStack
            flex={1}
            backgroundColor={theme.backgroundColor}
            gap={16}
            py={16}
        >
            <Card mx={8} px={8} borderRadius={8}>
                <HStack justifyContent="space-between" alignItems="center">
                    <HStack alignItems="center" gap={4} >
                        <Feather name="list" size={18} color={theme.colorDarkLight} />
                        <Text fontWeight="bold" fontSize={18} color={theme.colorText}>Categorias</Text>
                    </HStack>
                    <HStack alignItems="center" gap={16}>
                        <Pressable 
                            onPress={() => { navigation.navigate("categoryAdd/CategoryAdd") }}
                            flexDirection="row"
                            alignItems="center"
                            borderRadius={5} 
                            gap={2}
                            py={4} 
                            px={8}
                        >
                            <AntDesign name="plus" size={14} color={theme.colorDark} />
                            <Text color={theme.colorDark}>Adicionar</Text>
                        </Pressable>
                    </HStack>
                </HStack>
            </Card>

            <CategoryFilter onPress={handleCategory} />

            <ProductList data={data} navigation={() => { navigation.navigate("productAdd/ProductAdd") }}/>

            {/* <Box px={8}>
                <RoundButton
                    title="Adicionar produto"
                    onPress={() => { navigation.navigate("productAdd/ProductAdd") }}
                />
            </Box> */}
            <Footer />
        </VStack>
    )
}

