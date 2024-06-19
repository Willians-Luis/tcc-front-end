import Footer from "@/components/Footer";
import { Card, HStack, VStack } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import Panel from "./components/Panel";
import CashAdd from "./components/CashAdd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CashList from "./components/CashList";
import { apiGetExpensesByYearAndMonth, apiPostExpenses } from "@/api/expensesRoute";
import Alert from "@/components/Alert";
import DatePicker from "./components/DatePicker";
import Loading from "@/components/Loading";
import { apiGetSalesByYearAndMonth } from "@/api/saleRoute";
import theme from "@/style/theme";
import { AntDesign } from "@expo/vector-icons";

export default function CashFlow() {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [data, setData] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState("")

    const [entrada, setEntrada] = useState(0)
    const [saida, setSaida] = useState(0)
    const [total, setTotal] = useState(0)

    const date = new Date()
    const dataMonths = ["Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun.", "Jul."]
    const dataMonthsNumber = [1, 2, 3, 4, 5, 6, 7]

    const [clickedMonth, setClickedMonth] = useState(dataMonths[date.getMonth()])
    const [clickedYear, setClickedYear] = useState(date.getFullYear())

    const getExpensesAndSaleByYearAndMonth = async () => {
        const response1 = await apiGetExpensesByYearAndMonth(
            clickedYear,
            (dataMonths.indexOf(clickedMonth) + 1),
            user.accessToken
        )
        if (response1) {
            const response2 = await apiGetSalesByYearAndMonth(
                clickedYear,
                (dataMonths.indexOf(clickedMonth) + 1),
                user.accessToken
            )
            if (response2) {
                let valueSale = 0
                let valueCost = 0
                response2?.map((venda) => {
                    valueSale += (venda?.fk.produto.valorVenda * venda?.quantidade)
                    valueCost += (venda?.fk.produto.valorCusto * venda?.quantidade)
                })
                const arrayData = [{
                    "id": "abc1",
                    "descricao": "Vendas/produtos",
                    "valor": valueSale,
                    "tipo": "entrada"
                }, {
                    "id": "abc2",
                    "descricao": "Custos/produtos",
                    "valor": valueCost,
                    "tipo": "saida"
                }, ...response1]
                const totalIncome = arrayData.filter((data) => data.tipo === "entrada").reduce(
                    (acc, item) => acc + item.valor, 0
                )
                const totalIncome2 = arrayData.filter((data) => data.tipo === "saida").reduce(
                    (acc, item) => acc + item.valor, 0
                )
                setEntrada(totalIncome)
                setSaida(totalIncome2)
                setTotal(totalIncome - totalIncome2)
                return setData(arrayData)
            }
        }
        setMessage("Ocorreu algum erro!")
        setShowModal(true)
        return setData(false)
    }


    const registerExpenses = async (data) => {
        const expenses = {
            "descricao": data.description,
            "valor": data.value,
            "ano": clickedYear,
            "mes": (dataMonths.indexOf(clickedMonth) + 1),
            "tipo": data.type
        }
        const response = await apiPostExpenses(expenses, user.accessToken)
        if (response) {
            setMessage("Valor registrado com sucesso!")
            setShowModal(true)
            getExpensesAndSaleByYearAndMonth()
        } else {
            setMessage("Não foi possível registrar o valor!")
        }
    }

    const handleDatePickerMonth = (item) => {
        setData(false)
        setClickedMonth(item)
    }

    useEffect(() => {
        getExpensesAndSaleByYearAndMonth()
    }, [clickedMonth, clickedYear])

    return (
        <VStack flex={1}>
            {data && (<Box flex={1} py={16} px={8} gap={16}>
                <Box gap={8} flexDirection="row" justifyContent="center">
                    <Panel name="Entradas" icon="arrow-up-circle" value={entrada} iconColor="#29b806" />
                    <Panel name="Saidas" icon="arrow-down-circle" value={saida} iconColor="#db1d04" />
                    <Panel name="Total" icon="dollar-sign" value={total} />
                </Box>

                <Card backgroundColor={theme.colorDark} pb={8}>
                    <Box gap={8}>

                        <DatePicker date={dataMonths} datePicker={handleDatePickerMonth} isClicked={clickedMonth} />

                        <HStack justifyContent="space-between">
                            <AntDesign name="arrowleft" size={14} color={theme.colorLight} />
                            <AntDesign name="arrowright" size={14} color={theme.colorLight} />
                        </HStack>
                    </Box>
                </Card>

                <Card px={12} backgroundColor={theme.colorDark}>
                    <CashAdd registerExpenses={registerExpenses} />
                </Card>

                <CashList data={data} getExpensesAndSaleByYearAndMonth={getExpensesAndSaleByYearAndMonth} />

                <Footer />

                <Alert
                    showModal={showModal}
                    setShowModal={setShowModal}
                    message={message}
                />
            </Box>)}

            {!data && (<Loading />)}
        </VStack>
    )
}