import { useEffect, useState } from "react";
import { Box, VStack } from "@gluestack-ui/themed";
import CustomerList from "./components/CustomerList";
import { useDispatch, useSelector } from "react-redux";
import Container from "@/components/Container";
import CustomerFilter from "./components/CustomerFilter";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import RoundButton from "@/components/RoundButton";
import { apiGetAllCustomers, apiGetCustomer } from "@/api/customerRoute";
import { addCustomerAction } from "@/redux/customer/actions";
import theme from "@/style/theme";
import { useNavigation } from "expo-router";

export default function Customer() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [data, setData] = useState()
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const handleNavigate = async (item) => {
        const response = await apiGetCustomer(item.id, user.accessToken)
        if (response) dispatch(addCustomerAction(response))
        navigation.navigate("customerDetails/CustomerDetails")
    }

    useEffect(() => {
        const addAndReloadCustomerList = async () => {
            const response = await apiGetAllCustomers(user.accessToken)
            setData(response)
        }
        addAndReloadCustomerList()
    }, [customer])

    return (
        <VStack flex={1}>
            {!!data
                ? <Box flex={1} backgroundColor={theme.backgroundColor}>
                    <CustomerFilter />

                    <CustomerList
                        data={data}
                        onPress={(item) => handleNavigate(item)}
                    />

                    <RoundButton onPress={() => navigation.navigate("customerAdd/CustomerAdd")} />

                    <Footer />
                </Box>
                : <Loading />
            }
        </VStack>
    )
}
