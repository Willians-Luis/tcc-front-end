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
        if (response) {
            navigation.reset({
                index: 0,
                routes: [{ name: "customer/Customer" }], 
            })
        }
    }

    return (
        <VStack
            backgroundColor={theme.colorLight}
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

                <Controller
                    control={control}
                    name="telefone"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="Telefone (Opcional)"
                            onChangeText={onChange}
                            //keyboardType="numeric"
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
                        backgroundColor={theme.colorLight}
                        borderWidth={2}
                        borderColor={theme.colorDark}
                        onPress={() => navigation.navigate("customer/Customer")}
                    />
                    <Button
                        title="Registrar"
                        width={150}
                        color={theme.colorLight}
                        backgroundColor={theme.colorDark}
                        onPress={handleSubmit(customerRegister)}
                    />
                </Box>
            </Center>
            <Footer />
        </VStack>
    )
}