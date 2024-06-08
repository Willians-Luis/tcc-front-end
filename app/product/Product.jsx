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
            py={12}
            backgroundColor={theme.backgroundColor}
            gap={16}
        >
            <Container title="Categorias" icon="book" >
                <CategoryFilter onPress={handleCategory} />
            </Container>

            <Container title="Produtos" >
                <ProductList data={data} />
                <RoundButton onPress={() => navigation.navigate("productAdd/ProductAdd")} />
            </Container>
            
            <Footer />
        </VStack>
    )
}

