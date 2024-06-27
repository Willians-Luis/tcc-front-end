import { Box, Card, HStack, Text } from "@gluestack-ui/themed";
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
                ? <Box flex={1} py={16} gap={16}>
                    <Card flexDirection="row" mx={8} px={8} justifyContent="space-between" borderRadius={8}>
                        <HStack alignItems="center" gap={4}>
                            <Feather name="user" size={18} color={theme.colorDarkLight} />
                            <Text fontWeight="bold" color={theme.colorText}>{data.nome}</Text>
                        </HStack>
                        <HStack alignItems="center" gap={4}>
                            {data.telefone && <Feather name="phone" size={16} color={theme.colorDarkLight} />}
                            {data.telefone && <Text color={theme.colorText2} fontSize={14}>{data.telefone}</Text>}
                        </HStack>
                        <HStack gap={20} >
                            <Feather name="edit" size={20} color={theme.colorDark} />
                            <AntDesign name="delete" size={20} color={theme.colorDark} />
                        </HStack>
                    </Card>
                    
                    <SalesList data={data.vendas} navigation={() => { navigation.navigate("customerSell/CustomerSell") }}/>

                    <Container title="Debito total" icon="dollar-sign" borderBottomWidth={0} pb={12}>
                        <SalesPayments customer={data} />
                    </Container>

                    <Footer />
                </Box>
                : <Loading color={theme.colorDark} />
            }
        </Box>


    )
}