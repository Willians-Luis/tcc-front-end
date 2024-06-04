import { Text } from "@gluestack-ui/themed";
import { Box, Card } from "@gluestack-ui/themed";
import Button from "./Button";
import { useState } from "react";
import ColorPickerModal from "./ColorPickerModal";
import theme from "@/style/theme";

export default function ColorExample({ color, bgColor, handleColor, handleBgColor }) {
    const [showModalColor, setShowModalColor] = useState(false)
    const [showModalBgColor, setShowModalBgColor] = useState(false)

    return (
        <Box my={20}>
            <Box flexDirection="row" justifyContent="space-between" >
                <Button
                    title="Cor do Fundo"
                    onPress={() => setShowModalBgColor(true)}
                    color={theme.colorLight}
                    backgroundColor={theme.colorDark}
                />
                <Button
                    title="Cor da Letra"
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
                borderColor={color}
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
        </Box>

    )
}