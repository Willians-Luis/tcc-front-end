import { Box, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductListSell from "./components/ProductListSell";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "@/components/Footer";
import CategoryFilter from "@/components/CategoryFilter";
import Container from "@/components/Container";
import theme from "@/style/theme";

export default function CustomerSell() {
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)
    const [data, setData] = useState([])

    const handleCategory = (data) => {
        setData(data)
    }

    return (
        <VStack flex={1} backgroundColor={theme.backgroundColor}>
            <Box flex={1} py={16} gap={16}>
                <Container title={customer.nome} icon="user" p={4} borderBottomWidth={0}/>

                <CategoryFilter onPress={handleCategory} />

                <Container title="Produtos" icon="list" gap={4} borderBottomWidth={0} px={8}>
                    
                    <ProductListSell
                        data={data}
                    />
                </Container>
                <Container title="Carrinho" borderBottomWidth={0}>
                    <ShoppingCart customer={customer} />
                </Container>
            </Box>
            <Footer />
        </VStack>
    )
}