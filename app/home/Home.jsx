import { Box, Text } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import Button from "@/components/Button";
import { useNavigation } from "expo-router";
import Footer from "@/components/Footer";

export default function Home() {
    const navigation = useNavigation()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    return (
        <Box flex={1}>
            <Text>Bem vindo {user.name}</Text>
            <Button title="Resultados" onPress={() => navigation.navigate("results/Results")}/>
            <Button title="Produtos" onPress={() => navigation.navigate("product/Product")}/>
            <Button title="Clientes" onPress={() => navigation.navigate("customer/Customer")}/>
            <Footer/>
        </Box>
    )
}