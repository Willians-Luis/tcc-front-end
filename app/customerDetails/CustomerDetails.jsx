import { Box, HStack, Text } from "@gluestack-ui/themed";
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
                    <Container title="Cliente" icon="user" borderBottomWidth={0} pb={7}>
                        <Box flexDirection="row" justifyContent="space-between" px={8} mb={10}>
                            <Text color={theme.colorText}>
                                {data.nome}
                            </Text>

                            <HStack alignItems="center" gap={4}>
                                {/* {data.telefone && <Feather name="phone" size={14} color={theme.colorDarkLight} />} */}
                                {data.telefone && <Text color={theme.colorText2} fontSize={14}>{data.telefone}</Text>}
                            </HStack>
                            <Box flexDirection="row" gap={20} >
                                <Feather name="edit" size={20} color={theme.colorDark} />
                                <AntDesign name="delete" size={20} color={theme.colorDark} />
                            </Box>
                        </Box>
                    </Container>

                    <Container title="Vendas">
                        <SalesList data={data.vendas} />
                    </Container>

                    <Box px={8}>
                        <RoundButton
                            title="Adicionar venda"
                            onPress={() => { navigation.navigate("customerSell/CustomerSell") }}
                        />
                    </Box>

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