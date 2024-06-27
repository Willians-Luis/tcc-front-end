import { Center, VStack, Box } from '@gluestack-ui/themed';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useSelector } from 'react-redux';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import { InputCustom } from '@/components/InputCustom';
import theme from '@/style/theme';
import { useNavigation } from 'expo-router';
import { categoryValidationSchema } from '@/services/categoryValidationSchema';
import { apiPostCategory } from '@/api/categoryRoute';
import { useState } from 'react';
import Alert from '@/components/Alert';

export default function CategoryAdd() {
    const navigation = useNavigation()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState("")

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(categoryValidationSchema)
    })

    const categoryRegister = async (data) => {
        const category = {
            nome: data.nome,
        }
        const response = await apiPostCategory(category, user.accessToken)
        if (response) {
            setMessage("Categoria adicionada com sucesso!")
            setShowModal(true)
            navigation.reset({
                index: 0,
                routes: [{ name: "product/Product" }], 
            })
            return
        }
        setMessage("Falha ao adicionada categoria!")
        setShowModal(true)
    }

    return (
        <VStack
            backgroundColor={theme.backgroundColor}
            flex={1}
            padding={31}
        >
            <Center gap={12} flex={1}>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="Nome"
                            ErrorMessage={errors.nome?.message}
                            onChangeText={onChange}
                            borderColor={theme.colorDarkLight}
                            color={theme.colorDark}
                        />
                    )}
                />
                
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    width={350}
                >
                    <Button
                        title="Cancelar"
                        width={150}
                        color={theme.colorDark}
                        backgroundColor={theme.backgroundColor}
                        borderWidth={2}
                        borderColor={theme.colorDark}
                        onPress={() => navigation.navigate("product/Product")}
                    />
                    <Button
                        title="Registrar"
                        width={150}
                        color={theme.colorLight}
                        backgroundColor={theme.colorDark}
                        onPress={handleSubmit(categoryRegister)}
                    />
                </Box>
            </Center>

            <Alert
                showModal={showModal} 
                setShowModal={setShowModal} 
                message={message}
            />
            <Footer />
        </VStack>
    )
}