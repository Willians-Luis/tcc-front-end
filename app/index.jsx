import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginValidationSchema } from "@/services/loginValidationSchema";
import { Input } from "@/components/Input";
import { loginRoute } from "@/api/loginRoute";
import { addUserAction } from "@/redux/user/actions";
import Button from "@/components/Button";
import theme from "@/style/theme";
import { useNavigation } from "expo-router";
import { Image } from "@gluestack-ui/themed";

export default function Login() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [message, setMessage] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidationSchema)
    })

    const login = async (data) => {
        const user = {
            email: data.email,
            password: data.senha
        }
        const response = await loginRoute(user)
        if (response) {
            dispatch(addUserAction(response))
            navigation.navigate("home/Home", { response })
        } else {
            setMessage(true)
        }
    }

    return (
        <Center flex={1} bgColor={theme.colorDark}>
            <Image
                width={300}
                height={100}
                source={ require("../assets/images/logopng.png")}
                alt="Logo da empresa"
            />
            <VStack
                width={"100%"}
                height={450}
                borderRadius={10}
                p={8}
            >
                <Center gap={20} flex={1}>

                    <Controller
                        control={control}
                        name="email"
                        defaultValue="admin@admin.com"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                placeholder={"Email"}
                                placeholderTextColor={theme.colorDarkLight}
                                ErrorMessage={errors.email?.message}
                                onChangeText={onChange}
                                value={value}
                                height={50}
                                width={350}
                                borderWidth={1}
                                borderColor={theme.colorDarkLight}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="senha"
                        defaultValue="123admin"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                placeholder="Senha"
                                placeholderTextColor={theme.colorDarkLight}
                                ErrorMessage={errors.senha?.message}
                                onChangeText={onChange}
                                value={value}
                                type='password'
                                height={50}
                                width={350}
                                borderWidth={1}
                                borderColor={theme.colorDarkLight}
                            />
                        )}
                    />

                    <Button
                        title="Login"
                        width={350}
                        height={50}
                        onPress={handleSubmit(login)}
                        bgColor={theme.colorLight}
                        color={theme.colorDark}
                        borderRadius={30}
                    />

                    {message && (
                        <Text color="#ff0000">Não foi possível efetuar o login!</Text>
                    )}
                    <HStack>
                        <Text fontSize={14} color={theme.colorDarkLight}>Não tem uma conta? </Text>
                        <Text fontSize={14} color={theme.colorLight}>Registrar</Text>
                    </HStack>
                    <Text color={theme.colorLight} fontSize={14}>Esqueceu sua senha?</Text>

                </Center>
            </VStack>
        </Center>

    )
}