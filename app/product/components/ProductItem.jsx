import { Box, HStack, Text, VStack } from "@gluestack-ui/themed"
import { Pressable } from "@gluestack-ui/themed"
import { useEffect, useState } from "react"
import ProductDetails from "./ProductDetails"
import theme from "@/style/theme"
import FormattedMoney from "@/components/FormattedMoney"
import { apiUpdateStock } from "@/api/productRoute"
import { useSelector } from "react-redux"
import Alert from "@/components/Alert"

export default function ProductItem({ item }) {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [showModal, setShowModal] = useState(false)
    const [showModalAlert, setShowModalAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [valueStock, setValueStock] = useState(item.quantidade)
    const [buttonSave, setButtonSave] = useState(false)

    const handleVisibility = () => {
        setShowModal(!showModal)
    }

    const handleUpdateStock = async () => {
        const response = await apiUpdateStock(item.id, valueStock, user.accessToken)
        if (response) {
            setMessage("Estoque atualizado com sucesso!")
            setShowModalAlert(true)
        } else {
            setMessage("Não foi possível atualizar o estoque!")
            setShowModalAlert(true)
        }
    }

    const handleIncreaseStock = () => {
        setValueStock(valueStock + 1)
        setButtonSave(true)
    }

    const handleDecreaseStock = () => {
        if (valueStock >= 1) {
            setValueStock(valueStock - 1)
            setButtonSave(true)
        }
    }

    const handleLongIncreaseStock = () => {
        setValueStock(valueStock + 10)
        setButtonSave(true)
    }

    const handleLongDecreaseStock = () => {
        if (valueStock >= 10) {
            setValueStock(valueStock - 10)
            setButtonSave(true)
        }
    }

    const handleSaveUpdateStock = () => {
        handleUpdateStock()
        setButtonSave(false)
    }

    const handleCancelUpdateStock = () => {
        setButtonSave(false)
        setValueStock(item.quantidade)
    }

    useEffect(() => {

    }, [handleUpdateStock])

    return (
        <HStack width={"100%"} px={8} my="$1" alignItems="center">
            <Pressable
                onPress={handleVisibility}
                borderRadius={8}
                padding={6}
                flexDirection="row"
                backgroundColor={item.backgroundColor}
                borderWidth={2}
                borderColor={item.borderColor}
                width={!buttonSave ? "75%" : "50%"}
            >
                <Box
                    width={"100%"}
                    px={8}
                >
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        py={8}
                    >
                        <Text color={item.textColor} fontWeight="bold">
                            {item.nome}
                        </Text>
                        {!buttonSave && <FormattedMoney value={item.valorVenda} color={item.textColor} fontWeight="bold" />}
                    </Box>
                </Box>
            </Pressable>

            <VStack width={"23.8%"} display={buttonSave ? "flex" : "none"} 
            alignItems="center" justifyContent="space-between" mx={2} gap={8}>
                <Pressable 
                    onPress={handleSaveUpdateStock}
                    borderRadius={8}
                    width={"100%"}
                    backgroundColor={theme.colorGreen}
                    alignItems="center"
                    py={3}
                >
                    <Text color={theme.colorLight} fontWeight="bold" >Salvar</Text>
                </Pressable>
                <Pressable 
                    onPress={handleCancelUpdateStock}
                    borderRadius={8}
                    width={"100%"}
                    backgroundColor={theme.colorRed}
                    alignItems="center"
                    py={3}
                >
                    <Text color={theme.colorLight} fontWeight="bold">Cancelar</Text>
                </Pressable>
            </VStack>

            <HStack flex={1} m="$1" borderRadius={8} alignItems="center" p={2} h={"100%"}
                justifyContent="space-between" backgroundColor={theme.colorDark}>

                <Pressable
                    onPress={handleDecreaseStock}
                    onLongPress={handleLongDecreaseStock}
                    height={40}
                    width={20}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={8}
                    disabled={valueStock < 1}
                    $active-bgColor={theme.colorDarkLight}
                    $disabled-backgroundColor={theme.colorDarkLight}
                >
                    <Text fontWeight="bold" fontSize={20} color={theme.colorLight}>-</Text>
                </Pressable>

                <Text color={theme.colorDarkLight}>{valueStock}</Text>

                <Pressable
                    onPress={handleIncreaseStock}
                    onLongPress={handleLongIncreaseStock}
                    height={40}
                    width={20}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={8}
                    $active-bgColor={theme.colorDarkLight}
                >
                    <Text fontWeight="bold" fontSize={20} color={theme.colorLight}>+</Text>
                </Pressable>

            </HStack>

            <ProductDetails showModal={showModal} setShowModal={setShowModal} item={item} />

            <Alert showModal={showModalAlert} setShowModal={setShowModalAlert} message={message}/>
        </HStack>
    )
}