import { apiGetAllSales } from "@/api/saleRoute";
import Footer from "@/components/Footer";
import theme from "@/style/theme";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GraphicLine from "./components/GraphicLine";
import Loading from "@/components/Loading";


export default function Results() {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [paidSales, setPaidSales] = useState(false)
    const [pendingSales, setPendingSales] = useState(false)


    const handleGetSales = async () => {
        const response = await apiGetAllSales(user.accessToken)
        if (response) {
            handlePendingSales(response)
            handlePaidSales(response)
        }
    }

    const handlePendingSales = (data) => {
        const pending = data.filter((sale) => sale.status === true)
        const newPendig = pending.map((sale) => {
            return {
                ...sale, 
                x: (new Date(sale.dataVenda).getMonth() + 1),
                y: (sale.quantidade * sale.fk.produto.valorVenda)
            }
        })
        setPendingSales(newPendig)
    }

    const handlePaidSales = (data) => {
        const paid = data.filter((sale) => sale.status === false)
        setPaidSales(paid)
    }

    

    // {
    //     "anoPagamento": null, 
    //     "dataVenda": "2024-01-11T16:07:21.123Z", 
    //     "fk": {"cliente": [Object], "produto": [Object]}, 
    //     "id": 1, 
    //     "mesPagamento": null, 
    //     "quantidade": 11, 
    //     "status": true, 
    //     "user": {"name": "admin"}
    // }

    useEffect(() => {
        handleGetSales()
    }, [])

    return (
        <Box flex={1}>
            <ScrollView flex={1} padding={10} 
            backgroundColor={theme.backgroundColor}>
                <Text>{paidSales.length}</Text>
                <Text>{pendingSales.length}</Text>
                {pendingSales && (<GraphicLine DATA={pendingSales} />)}
                {!pendingSales && (<Loading />)}
            </ScrollView>
            <Footer />
        </Box>

    )
}