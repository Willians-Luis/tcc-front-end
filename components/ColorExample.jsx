import { Text } from "@gluestack-ui/themed";
import { Box, Card } from "@gluestack-ui/themed";
import Button from "./Button";
import { useState } from "react";
import ColorPickerModal from "./ColorPickerModal";
import theme from "@/style/theme";

export default function ColorExample({ 
    color = theme.backgroundColor, 
    bgColor = theme.colorLight, 
    borderColor = theme.colorLight,  
    handleColor, 
    handleBgColor, 
    handleBorderColor 
}) {
    const [showModalColor, setShowModalColor] = useState(false)
    const [showModalBgColor, setShowModalBgColor] = useState(false)
    const [showModalBorderColor, setShowModalBorderColor] = useState(false)

    return (
        <Box gap={4} borderWidth={2} borderColor={theme.colorLight} padding={8} borderRadius={5}>
            <Text color={theme.colorLight} textAlign="center">Escolha as cores do produto</Text>
            <Box flexDirection="row" justifyContent="space-between" >
                <Button
                    title="Fundo"
                    onPress={() => setShowModalBgColor(true)}
                    color={theme.colorLight}
                    backgroundColor={theme.colorDark}
                />

                <Button
                    title="Contorno"
                    onPress={() => setShowModalBorderColor(true)}
                    color={theme.colorLight}
                    backgroundColor={theme.colorDark}
                />

                <Button
                    title="Letra"
                    onPress={() => setShowModalColor(true)}
                    color={theme.colorLight}
                    backgroundColor={theme.colorDark}
                />
            </Box>
            <Card
                my="$1"
                padding={6}
                flexDirection="row"
                backgroundColor={bgColor}
                borderWidth={2}
                borderColor={borderColor}
            >
                <Box
                    width="$full"
                    px={8}
                >
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        py={8}
                    >
                        <Text color={color} fontWeight="bold">
                            Produto
                        </Text>
                        <Text color={color} fontWeight="bold">
                            R$ 00,00
                        </Text>
                    </Box>
                </Box>
            </Card>
            <ColorPickerModal
                showModal={showModalColor}
                setShowModal={setShowModalColor}
                initialColor={color}
                onColorChange={handleColor}
            />
            <ColorPickerModal
                showModal={showModalBgColor}
                setShowModal={setShowModalBgColor}
                initialColor={bgColor}
                onColorChange={handleBgColor}
            />
            <ColorPickerModal
                showModal={showModalBorderColor}
                setShowModal={setShowModalBorderColor}
                initialColor={borderColor}
                onColorChange={handleBorderColor}
            />
        </Box>

    )
}