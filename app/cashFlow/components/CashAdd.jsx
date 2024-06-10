import Button from "@/components/Button";
import { InputCustom } from "@/components/InputCustom";
import { cashValidationSchema } from "@/services/cashValidationSchema";
import { Box, Center, HStack } from "@gluestack-ui/themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import InputRadio from "./InputRadio";
import theme from "@/style/theme";
import { Feather } from "@expo/vector-icons";

export default function CashAdd({ registerExpenses }) {

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(cashValidationSchema)
    })

    const canselRegister = () => {
        reset()
    }

    return (
        <Center gap={8}>
            <Controller
                control={control}
                name="description"
                render={({ field: { onChange } }) => (
                    <Box flexDirection="row" alignItems="center" width={"100%"}>
                        <Box width={"7%"}>
                            <Feather name="file-text" size={20} color={theme.colorDark2} />
                        </Box>

                        <InputCustom
                            placeholder="Descrição"
                            ErrorMessage={errors.description?.message}
                            onChangeText={onChange}
                            borderColor={theme.colorDarkLight}
                            variant="underlined"
                            height={35}
                            width={"91%"}
                            color={theme.colorLight}
                        />
                    </Box>
                )}
            />
            <Box width={"100%"} flexDirection="row" alignItems="center" justifyContent="space-between">
                <Controller
                    control={control}
                    name="value"
                    render={({ field: { onChange } }) => (
                        <Box flexDirection="row" alignItems="center" width={"50%"} gap={3}>
                            <Center width={"12%"} justifyContent="center" alignItems="ceter">
                                <Feather name="dollar-sign" size={20} color={theme.colorDark2} />
                            </Center>
                            <InputCustom
                                placeholder="Valor"
                                ErrorMessage={errors.value?.message}
                                onChangeText={onChange}
                                keyboardType="numeric"
                                height={35}
                                borderColor={theme.colorDarkLight}
                                variant="underlined"
                                width={"88%"}
                                color={theme.colorLight}
                            />
                        </Box>

                    )}
                />
                <Controller
                    control={control}
                    name="type"
                    render={({ field: { onChange } }) => (
                        <InputRadio
                            ErrorMessage={errors.type?.message}
                            onChangeText={onChange}
                        />
                    )}
                />
            </Box>
            <HStack width={"100%"} justifyContent="space-between" mt={4}>
                <Button
                    title="Cancelar"
                    onPress={canselRegister}
                    width={"45%"}
                    height={35}
                    backgroundColor={theme.colorDark}
                    borderWidth={2}
                    borderColor={theme.colorDark2}
                    color={theme.colorDark2}
                />
                <Button
                    title="Registrar"
                    onPress={handleSubmit(registerExpenses)}
                    width={"45%"}
                    height={35}
                    backgroundColor={theme.colorDark2}
                    color={theme.colorDark}
                />
            </HStack>

        </Center>
    )
}