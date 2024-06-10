import theme from "@/style/theme";
import { FormControl, FormControlError, FormControlErrorText } from "@gluestack-ui/themed";
import { Box, Center, Pressable, Text } from "@gluestack-ui/themed";
import { useState } from "react";

export default function InputRadio({ ErrorMessage = null, onChangeText }) {
    const invalid = !!ErrorMessage
    const [tipo, setTipo] = useState(false)

    const handleOnChangeText = (type) => {
        onChangeText(type)
        setTipo(type)
    }

    return (
        <FormControl isInvalid={invalid}>
            <Box alignItems="flex-start" flexDirection="row" gap={16} w={"50%"} p={5.5}>
                <Center flexDirection="row" gap={4}>
                    <Pressable
                        borderWidth={2}
                        borderColor={theme.colorDark2}
                        borderRadius="$full"
                        onPress={() => handleOnChangeText("entrada")}
                    >
                        <Box
                            backgroundColor={tipo === "entrada" ? theme.colorLight : theme.colorDark}
                            width={15}
                            height={15}
                            borderRadius="$full"
                            borderWidth={1}
                            borderColor={theme.colorDark}
                        ></Box>
                    </Pressable>
                    <Text color={theme.colorDark2}>Entrada</Text>
                </Center>
                <Center flexDirection="row" gap={4}>
                    <Pressable
                        borderWidth={2}
                        borderColor={theme.colorDark2}
                        borderRadius="$full"
                        onPress={() => handleOnChangeText("saida")}
                    >
                        <Box
                            backgroundColor={tipo === "saida" ? theme.colorLight : theme.colorDark}
                            width={15}
                            height={15}
                            borderRadius="$full"
                            borderWidth={1}
                            borderColor={theme.colorDark}
                        ></Box>
                    </Pressable>
                    <Text color={theme.colorDark2}>Saida</Text>
                </Center>
            </Box>
            <FormControlError>
                <FormControlErrorText color='#f00'>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}