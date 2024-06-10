import { useState } from "react";
import { VStack } from "@gluestack-ui/themed";
import ProductList from "./components/ProductList";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import theme from "@/style/theme";
import Container from "@/components/Container";
import RoundButton from "@/components/RoundButton";
import { useNavigation } from "expo-router";
import { Box } from "@gluestack-ui/themed";

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
            <Container title="Categorias" icon="book" mb={0} borderBottomWidth={0}>

            </Container>

            <CategoryFilter onPress={handleCategory} />

            <ProductList data={data} />

            <Box px={16}>
                <RoundButton
                    title="Adicionar produto"
                    onPress={() => { navigation.navigate("productAdd/ProductAdd") }}
                />
            </Box>
            <Footer />
        </VStack>
    )
}

