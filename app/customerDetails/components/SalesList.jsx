import { Box, FlatList, Text } from "@gluestack-ui/themed"
import { useDispatch, useSelector } from "react-redux"
import SaleItem from "./SaleItem"
import { useState } from "react"
import { apiDeleteSale, apiPaySale } from "@/api/saleRoute"
import { apiGetCustomer } from "@/api/customerRoute"
import { addCustomerAction } from "@/redux/customer/actions"
import Alert from "@/components/Alert"

export default function SalesList({ data }) {
    const [showModalAlertDelete, setShowModalAlertDelete] = useState(false)
    const [showModalAlertPayment, setShowModalAlertPayment] = useState(false)

    const newdata = data?.filter((venda) => venda.status == true)

    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const { customer } = useSelector(rootReducer => rootReducer.customerReducer)

    const dispatch = useDispatch()

    const handleSaleDelete = async (id) => {
        const response = await apiDeleteSale(id, user.accessToken)
        if (response) {
            const resp = await apiGetCustomer(customer.id, user.accessToken)
            if (resp) dispatch(addCustomerAction(resp))
        }
        setShowModalAlertDelete(true)
    }

    const handleSalePayment = async (id) => {
        const response = await apiPaySale(id, user.accessToken)
        if (response) {
            const resp = await apiGetCustomer(customer.id, user.accessToken)
            if (resp) dispatch(addCustomerAction(resp))
        }
        setShowModalAlertPayment(true)
    }
    
    return (
        <Box width="$full" height={305} >
            {newdata?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={newdata}
                    renderItem={({ item }) => (
                        <SaleItem
                            item={item} 
                            handleSaleDelete={handleSaleDelete}
                            handleSalePayment={handleSalePayment}
                        />
                    )}
                />
                : <Box flex={1} justifyContent="center" alignItems="center">
                    <Text>Nenhum registro encontrado!</Text>
                </Box>
            }
            
            <Alert
                showModal={showModalAlertDelete} 
                setShowModal={setShowModalAlertDelete} 
                message="Venda removida com sucesso!"
            />
            
            <Alert
                showModal={showModalAlertPayment} 
                setShowModal={setShowModalAlertPayment} 
                message="Pagamento registrado com sucesso!"
            />
        </Box>
    )
}
