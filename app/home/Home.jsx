import { Box, HStack, Text } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import Button from "@/components/Button";
import { useNavigation } from "expo-router";
import Footer from "@/components/Footer";
import CardCustom from "./components/CardCustom";
import theme from "@/style/theme";

export default function Home() {
    const navigation = useNavigation()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    return (
        <Box flex={1} p={16} gap={16}>
            <HStack width={"100%"} justifyContent="space-between">
                <CardCustom
                    onPress={() => navigation.navigate("product/Product")}
                    title="Produtos"
                    content=""
                    bgColor={theme.colorLight}
                />

                <CardCustom
                    onPress={() => navigation.navigate("customer/Customer")}
                    title="Clientes"
                    content=""
                    bgColor={theme.colorLight}
                />
            </HStack>
            <HStack width={"100%"} justifyContent="space-between"> 
                <CardCustom
                    onPress={() => navigation.navigate("results/Results")}
                    title="Resultados"
                    content=""
                    bgColor={theme.colorLight}
                />

                <CardCustom
                    onPress={() => navigation.navigate("cashFlow/CashFlow")}
                    title="Financeiro"
                    content=""
                    bgColor={theme.colorLight}
                />
            </HStack>

            <Footer />
        </Box>
    )
}