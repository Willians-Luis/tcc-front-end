import Button from "@/components/Button";
import { InputCustom } from "@/components/InputCustom";
import { Textarea } from "@/components/Textarea";
import { cashValidationSchema } from "@/services/cashValidationSchema";
import { Box, Center } from "@gluestack-ui/themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import InputRadio from "./InputRadio";

export default function CashAdd({ registerExpenses }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(cashValidationSchema)
    })

    return (
        <Center gap={8}>
            <Controller
                control={control}
                name="description"
                render={({ field: { onChange } }) => (
                    <InputCustom
                        placeholder="Descrição"
                        ErrorMessage={errors.description?.message}
                        onChangeText={onChange}
                    />
                )}
            />
            <Box width={350} flexDirection="row" alignItems="center" justifyContent="space-between">
                <Controller
                    style={{ width: "100%" }}
                    control={control}
                    name="value"
                    render={({ field: { onChange } }) => (
                        <InputCustom
                            placeholder="Valor"
                            ErrorMessage={errors.value?.message}
                            onChangeText={onChange}
                            keyboardType="numeric"
                            width={120}
                            height={35}
                        />
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
            <Button
                title="Registrar"
                onPress={handleSubmit(registerExpenses)}
                width={350}
                height={35}
            />
        </Center>
    )
}