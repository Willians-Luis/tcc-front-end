import { Center, VStack, Box } from '@gluestack-ui/themed';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useSelector } from 'react-redux';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import { customerValidationSchema } from '@/services/customerValidationSchema';
import { InputCustom } from '@/components/InputCustom';
import { apiPostCustomer } from '@/api/customerRoute';
import theme from '@/style/theme';
import { useNavigation } from 'expo-router';

export default function CustomerAdd() {
    const navigation = useNavigation()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(customerValidationSchema)
    })

    const customerRegister = async (data) => {
        const customer = {
            nome: data.nome,
            telefone: data.telefone
        }
        const response = await apiPostCustomer(customer, user.accessToken)
        console.log(response)
        navigation.reset({
            index: 0,
            routes: [{ name: "customer/Customer" }], 
        })
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
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="telefone"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="Telefone (Opcional)"
                            onChangeText={onChange}
                            keyboardType="numeric"
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
                        height={50}
                        backgroundColor={theme.colorNegative}
                        onPress={() => navigation.navigate("customer/Customer")}
                    />
                    <Button
                        title="Registrar"
                        width={150}
                        height={50}
                        backgroundColor={theme.colorPositive}
                        onPress={handleSubmit(customerRegister)}
                    />
                </Box>
            </Center>
            <Footer />
        </VStack>
    )
}