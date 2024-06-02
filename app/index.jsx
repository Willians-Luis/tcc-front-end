import { Center, Text, VStack } from "@gluestack-ui/themed";
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
            navigation.navigate("home/Home")
        } else {
            setMessage(true)
        }
    }

    return (
        <VStack
            flex={1}
            padding={31}
            bgColor={theme.white}
        >
            <Center gap={12} flex={1}>

                <Controller
                    control={control}
                    name="email"
                    defaultValue="admin@admin.com"
                    render={({ field: { value, onChange } }) => (
                        <Input
                            placeholder="Email"
                            ErrorMessage={errors.email?.message}
                            onChangeText={onChange}
                            value={value}
                            color={theme.colorDark}
                            placeholderTextColor={theme.colorDark}
                            borderColor={theme.colorDark}
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
                            ErrorMessage={errors.senha?.message}
                            onChangeText={onChange}
                            value={value}
                            type='password'
                            color={theme.colorDark}
                            placeholderTextColor={theme.colorDark}
                            borderColor={theme.colorDark}
                        />
                    )}
                />

                <Button
                    title="Login"
                    width={350}
                    height={50}
                    onPress={handleSubmit(login)}
                    bgColor={theme.colorDark}
                    color={theme.colorLight}
                />

                {message && (
                    <Text color="#ff0000">Não foi possível efetuar o login!</Text>
                )}
            </Center>
        </VStack>
    )
}