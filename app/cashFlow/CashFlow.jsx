import Footer from "@/components/Footer";
import { Card, Text, VStack } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import Panel from "./components/Panel";
import CashAdd from "./components/CashAdd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CashList from "./components/CashList";
import { apiDeleteExpenses, apiGetExpensesByYearAndMonth, apiPostExpenses } from "@/api/expensesRoute";
import Alert from "@/components/Alert";
import DatePicker from "./components/DatePicker";
import Loading from "@/components/Loading";
import { apiGetSalesByYearAndMonth } from "@/api/saleRoute";
import Confirm from "@/components/Confirm";
import theme from "@/style/theme";

export default function CashFlow() {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [data, setData] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [message, setMessage] = useState("")

    const [entrada, setEntrada] = useState(0)
    const [saida, setSaida] = useState(0)
    const [total, setTotal] = useState(0)

    const date = new Date()
    const dataYears = [2024]
    const dataMonths = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

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
                    "descricao": "Custos/Produtos",
                    "valor": valueCost,
                    "tipo": "saida"
                }, ...response1]
                const totalIncome = arrayData.filter((data) => data.tipo === "entrada").reduce(
                    (acc, item) => acc + item.valor, 0
                );
                const totalIncome2 = arrayData.filter((data) => data.tipo === "saida").reduce(
                    (acc, item) => acc + item.valor, 0
                );
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


    const deleteExpense = async (id) => {
        const response = await apiDeleteExpenses(id, user.accessToken)
        if (response) {
            setMessage("Valor excluido com sucesso!")
            setShowModal(true)
            getExpensesAndSaleByYearAndMonth()
        } else {
            setMessage("Não foi possível excluir o valor!")
        }
    }

    const handleDatePickerMonth = (item) => {
        setData(false)
        setClickedMonth(item)

    }

    const handleDatePickerYear = (item) => {
        setData(false)
        setClickedYear(item)
    }

    const handleDeleteExpense = (id) => {
        setShowModalConfirm(true)
    }

    useEffect(() => {
        getExpensesAndSaleByYearAndMonth()
    }, [clickedMonth, clickedYear])

    return (
        <VStack flex={1}>
            {data && (<Box flex={1} p={8} gap={16}>
                <Box gap={8} flexDirection="row" justifyContent="center">
                    <Panel name="Entradas" icon="arrow-circle-up" value={entrada} />
                    <Panel name="Saidas" icon="arrow-circle-down" value={saida} />
                    <Panel name="Total" icon="attach-money" value={total} />
                </Box>

                <Card backgroundColor={theme.colorDark}>
                    <Box gap={8}>
                        <DatePicker data={dataYears} datePicker={handleDatePickerYear} isClicked={clickedYear} />
                        <DatePicker data={dataMonths} datePicker={handleDatePickerMonth} isClicked={clickedMonth} />
                    </Box>
                </Card>

                <Card px={12} backgroundColor={theme.colorDark}>
                    <CashAdd registerExpenses={registerExpenses} />
                </Card>

                <CashList data={data} handleDeleteExpense={handleDeleteExpense}/>

                <Footer />

                <Confirm 
                    showModal={showModalConfirm}
                    setShowModal={setShowModalConfirm}
                    onPress={deleteExpense}
                    message={"Deseja excluir este registro?"}
                />

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