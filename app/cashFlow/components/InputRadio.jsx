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
            <Box flexDirection="row" gap={16}>
                <Center flexDirection="row" gap={4}>
                    <Pressable
                        borderWidth={2}
                        borderColor="#00F"
                        borderRadius="$full"
                        onPress={() => handleOnChangeText("entrada")}
                    >
                        <Box
                            backgroundColor={tipo === "entrada" ? "#00F" : "#fff"}
                            width={15}
                            height={15}
                            borderRadius="$full"
                            borderWidth={1}
                            borderColor="#ffF"
                        ></Box>
                    </Pressable>
                    <Text>Entrada</Text>
                </Center>
                <Center flexDirection="row" gap={4}>
                    <Pressable
                        borderWidth={2}
                        borderColor="#00F"
                        borderRadius="$full"
                        onPress={() => handleOnChangeText("saida")}
                    >
                        <Box
                            backgroundColor={tipo === "saida" ? "#00F" : "#fff"}
                            width={15}
                            height={15}
                            borderRadius="$full"
                            borderWidth={1}
                            borderColor="#ffF"
                        ></Box>
                    </Pressable>
                    <Text>Saida</Text>
                </Center>
            </Box>
            <FormControlError>
                <FormControlErrorText>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}