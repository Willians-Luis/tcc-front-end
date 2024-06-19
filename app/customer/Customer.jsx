import { useEffect, useState } from "react";
import { Box, VStack } from "@gluestack-ui/themed";
import CustomerList from "./components/CustomerList";
import { useDispatch, useSelector } from "react-redux";
import CustomerFilter from "./components/CustomerFilter";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import RoundButton from "@/components/RoundButton";
import { apiGetAllCustomers, apiGetCustomer } from "@/api/customerRoute";
import { addCustomerAction } from "@/redux/customer/actions";
import theme from "@/style/theme";
import { useNavigation } from "expo-router";
import Button from "@/components/Button";

export default function Customer() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [data, setData] = useState(false)
    const [searchText, setSearchText] = useState("")
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const handleNavigate = async (item) => {
        const response = await apiGetCustomer(item.id, user.accessToken)
        if (response) dispatch(addCustomerAction(response))
        navigation.navigate("customerDetails/CustomerDetails")
    }

    const addAndReloadCustomerList = async () => {
        const response = await apiGetAllCustomers(user.accessToken)
        setData(response)
    }

    const handleOrderClick = () => {
        let newData = [...data]
        newData.sort((a, b) => 
            (a.nome > b.nome) ? 1 : (b.nome > a.nome) ? -1 : 0
        )
        setData(newData)
    }

    useEffect(() => {
        addAndReloadCustomerList()
        setSearchText("")
    }, [customer])

    useEffect(() => {
        if (searchText === "") {
            addAndReloadCustomerList()
        } else {
            setData(
                data.filter(item => (
                    item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                ))
            )
        }
    }, [searchText])

    return (
        <VStack flex={1}>
            {data
                ? <Box flex={1} backgroundColor={theme.backgroundColor} p={8} gap={16}>

                    <CustomerFilter 
                        onChageText={setSearchText} 
                        value={searchText} 
                        handleOrder={handleOrderClick}
                    />

                    <CustomerList
                        data={data}
                        onPress={(item) => handleNavigate(item)}
                    />

                    <RoundButton
                        onPress={() => navigation.navigate("customerAdd/CustomerAdd")}
                        title="Adicionar cliente"
                    />

                    <Footer />
                </Box>
                : <Loading />


            }
        </VStack>
    )
}
