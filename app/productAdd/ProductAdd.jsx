import { Center, VStack, Box } from '@gluestack-ui/themed';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import Button from '@/components/Button';
import CategoryFilter from '@/components/CategoryFilter';
import { apiPostProduct } from '@/api/productRoute';
import { productValidationSchema } from '@/services/productValidationSchema';
import Footer from '@/components/Footer';
import theme from '@/style/theme';
import { InputCustom } from '@/components/InputCustom';
import { Textarea } from '@/components/Textarea';

export default function ProductAdd() {
    const navigation = useNavigation()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(productValidationSchema)
    })

    const productRegister = async (data) => {
        const produto = {
            "nome": data.nome,
            "tipo": {
                "id": data.categoria
            },
            "quantidade": data.estoque,
            "valorCusto": data.valorCusto,
            "valorVenda": data.valorVenda,
            "descricao": data.descricao
        }
        const reponse = await apiPostProduct(produto, user.accessToken)
        if (reponse) {
            navigation.reset({
                index: 0,
                routes: [{ name: "Produtos" }],
            })
        }
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
                    name="categoria"
                    render={({ field: { onChange } }) => (
                        <CategoryFilter
                            onChangeText={onChange}
                            ErrorMessage={errors.categoria?.message}
                        />
                    )}
                />

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
                    name="valorCusto"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="valor de Custo"
                            ErrorMessage={errors.valorCusto?.message}
                            onChangeText={onChange}
                            keyboardType="numeric"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="valorVenda"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="valor de venda"
                            ErrorMessage={errors.valorVenda?.message}
                            onChangeText={onChange}
                            keyboardType="numeric"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="estoque"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="Quantidade em estoque"
                            ErrorMessage={errors.estoque?.message}
                            onChangeText={onChange}
                            keyboardType="numeric"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="descricao"
                    render={({ field: { onChange } }) => (
                        <Textarea
                            placeholder="Descrição (Opicional)"
                            ErrorMessage={errors.descricao?.message}
                            onChangeText={onChange}
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
                        onPress={() => navigation.navigate("Produtos")}
                    />
                    <Button
                        title="Registrar"
                        width={150}
                        height={50}
                        backgroundColor={theme.colorPositive}
                        onPress={handleSubmit(productRegister)}
                    />
                </Box>
            </Center>
            <Footer />
        </VStack>
    )
}