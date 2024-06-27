import { VStack, Box } from '@gluestack-ui/themed';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useSelector } from 'react-redux';
import Button from '@/components/Button';
import CategoryFilter from '@/components/CategoryFilter';
import { apiPostProduct } from '@/api/productRoute';
import { productValidationSchema } from '@/services/productValidationSchema';
import Footer from '@/components/Footer';
import theme from '@/style/theme';
import { InputCustom } from '@/components/InputCustom';
import ColorExample from '@/components/ColorExample';
import { useState } from 'react';
import { useNavigation } from 'expo-router';

export default function ProductAdd() {
    const navigation = useNavigation()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const [color, setColor] = useState("#000")
    const [bgColor, setBgColor] = useState("#fff")
    const [borderColor, setBorderColor] = useState("#000")

    const handleColor = (color) => {
        setColor(color)
    }

    const handleBgColor = (bgColor) => {
        setBgColor(bgColor)
    }

    const handleBorderColor = (borderColor) => {
        setBorderColor(borderColor)
    }

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
            "descricao": data.descricao,
            "textColor": color,
            "backgroundColor": bgColor,
            "borderColor": borderColor
        }
        const reponse = await apiPostProduct(produto, user.accessToken)
        if (reponse) {
            navigation.reset({
                index: 0,
                routes: [{ name: "product/Product" }],
            })
        }
    }

    return (
        <VStack
            backgroundColor={theme.backgroundColor}
            flex={1}
            alignItems="center" 
        >
            <Controller
                control={control}
                name="categoria"
                render={({ field: { onChange } }) => (
                    <CategoryFilter
                        onChangeText={onChange}
                        ErrorMessage={errors.categoria?.message}
                        mt={20}
                    />
                )}
            />

            <Box gap={12} flex={1} alignItems="center" padding={8}>

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
                        <InputCustom
                            placeholder="Descrição (Opcional)"
                            ErrorMessage={errors.descricao?.message}
                            onChangeText={onChange}
                        />
                    )}
                />

                <ColorExample
                    color={color}
                    bgColor={bgColor}
                    borderColor={borderColor}
                    handleColor={handleColor}
                    handleBgColor={handleBgColor}
                    handleBorderColor={handleBorderColor}
                />


                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    width={"100%"}
                >
                    <Button
                        title="Cancelar"
                        width={"46%"}
                        color={theme.colorDark}
                        backgroundColor={theme.backgroundColor}
                        borderWidth={2}
                        borderColor={theme.colorDark}
                        onPress={() => navigation.navigate("product/Product")}
                        borderRadius={8}
                    />
                    <Button
                        title="Registrar"
                        width={"46%"}
                        color={theme.colorLight}
                        backgroundColor={theme.colorDark}
                        onPress={handleSubmit(productRegister)}
                        borderRadius={8}
                    />
                </Box>
            </Box>

            <Footer />

        </VStack>
    )
}