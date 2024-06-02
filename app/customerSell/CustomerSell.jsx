import { Box, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductListSell from "./components/ProductListSell";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "@/components/Footer";
import CategoryFilter from "@/components/CategoryFilter";
import Container from "@/components/Container";

export default function CustomerSell() {
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)
    const [data, setData] = useState([])

    const handleCategory = (data) => {
        setData(data)
    }

    return (
        <VStack flex={1}>
            <Box flex={1} p={12} gap={16}>
                <Container title={customer.nome} icon="user" p={4} />
                <Container title="Categorias/Produtos" icon="book" gap={4}>
                    <CategoryFilter onPress={handleCategory} />
                    <ProductListSell
                        data={data}
                    />
                </Container>
                <Container title="Carrinho">
                    <ShoppingCart customer={customer} />
                </Container>
            </Box>
            <Footer />
        </VStack>
    )
}