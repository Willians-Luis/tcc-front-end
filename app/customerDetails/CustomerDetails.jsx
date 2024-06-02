import { Box, Text } from "@gluestack-ui/themed";
import SalesList from "./components/SalesList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SalesPayments from "./components/SalesPayments";
import { useNavigation } from "expo-router";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Container from "@/components/Container";
import { apiGetCustomer } from "@/api/customerRoute";
import theme from "@/style/theme";
import RoundButton from "@/components/RoundButton";

export default function CustomerDetails() {
    const navigation = useNavigation()
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [data, setData] = useState()

    useEffect(() => {
        const handleCustomerReload = async () => {
            const response = await apiGetCustomer(customer.id, user.accessToken)
            setData(response)
        }
        handleCustomerReload()
    }, [customer])

    return (
        <Box flex={1} backgroundColor={theme.backgroundColor}>
            {data
                ? <Box flex={1} p={8} gap={16}>
                    <Container title="Cliente" icon="user">
                        <Box flexDirection="row" justifyContent="space-between" pb={4}>
                            <Text>{data.nome}</Text>
                            <Text>{data.telefone ? data.telefone : ""}</Text>
                            <Box flexDirection="row" gap={20}>
                                <Feather name="edit" size={24} color="black" />
                                <AntDesign name="delete" size={24} color="black" />
                            </Box>
                        </Box>
                    </Container>

                    <Container title="Vendas">
                        <SalesList data={data.vendas} />
                        <RoundButton
                            onPress={() => { navigation.navigate("customerSell/CustomerSell") }}
                        />
                    </Container>

                    <Container title="Debito total" icon="attach-money">
                        <SalesPayments customer={data} />
                    </Container>

                    <Footer />
                </Box>
                : <Loading color={theme.colorDark} />
            }
        </Box>


    )
}