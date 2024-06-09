import { useState } from "react";
import { VStack } from "@gluestack-ui/themed";
import ProductList from "./components/ProductList";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import theme from "@/style/theme";
import Container from "@/components/Container";
import RoundButton from "@/components/RoundButton";
import { useNavigation } from "expo-router";

export default function Product() {
    const [data, setData] = useState()
    const navigation = useNavigation()

    const handleCategory = (data) => {
        setData(data)
    }

    return (
        <VStack
            flex={1}
            backgroundColor={theme.backgroundColor}
        >
            <Container title="Categorias" icon="book" borderBottomWidth={0}>
                <CategoryFilter onPress={handleCategory} />
            </Container>

            <ProductList data={data} />

            <RoundButton onPress={() => navigation.navigate("productAdd/ProductAdd")} />
            
            <Footer />
        </VStack>
    )
}

