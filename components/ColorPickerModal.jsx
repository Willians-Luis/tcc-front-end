import theme from "@/style/theme";
import { Modal, ModalBackdrop, ModalBody, ModalContent, Text, ModalFooter, Pressable } from "@gluestack-ui/themed";
import React, { useState, useRef } from 'react';
import tinycolor from 'tinycolor2';
import RectangleColorPicker from 'react-native-rectangle-color-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function ColorPickerModal({ showModal, setShowModal, initialColor = "#fff", onColorChange }) {
    const [color, setColor] = useState(initialColor)
    const colorPickerRef = useRef(null)

    const handleColorChange = (colorHsv) => {
        const newColor = tinycolor(colorHsv).toHexString()
        setColor(newColor)
        onColorChange?.(newColor)
    }

    const renderSaturation = () => null;

    return (
        <Modal
            isOpen={showModal}
            onClose={() => { setShowModal(false) }}
        >
            <ModalBackdrop />
            <ModalContent bgColor={color}>
                <ModalBody pt={50}>

                    <GestureHandlerRootView style={{ alignItems: 'center' }}>
                        <RectangleColorPicker
                            ref={colorPickerRef}
                            oldColor={color}
                            onColorChange={handleColorChange}
                            textSaturation={'Saturação'}
                            diamond={false}
                            staticPalette={false}
                            renderSaturation={renderSaturation}
                        />
                    </GestureHandlerRootView>

                </ModalBody>
                <ModalFooter gap={30}>
                    <Pressable 
                        onPress={() => { setShowModal(false) }}
                        padding={5}
                        bgColor={theme.white}
                        borderRadius={5}
                    >
                        <Text color={theme.black} fontSize={16}>OK</Text>
                    </Pressable>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}
