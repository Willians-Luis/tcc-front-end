import { apiGetAllSales } from "@/api/saleRoute";
import Footer from "@/components/Footer";
import theme from "@/style/theme";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Results() {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [paidSales, setPaidSales] = useState([])
    const [pendingSales, setPendingSales] = useState([])


    const handleGetSales = async () => {
        const response = await apiGetAllSales(user.accessToken)
        if (response) {
            const paid = response.filter((sale) => sale.status === false)
            const pending = response.filter((sale) => sale.status === true)
            setPaidSales(paid)
            setPendingSales(pending)
        }
    }

    useEffect(() => {
        handleGetSales()
    }, [])

    return (
        <Box flex={1}>
            <ScrollView flex={1} padding={10} 
            backgroundColor={theme.backgroundColor}>
                <Text>{paidSales.length}</Text>
                <Text>{pendingSales.length}</Text>

            </ScrollView>
            <Footer />
        </Box>

    )
}