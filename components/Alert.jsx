import theme from "@/style/theme";
import { Box, Modal, ModalBackdrop, ModalBody, ModalContent, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

export default function Alert({ showModal, setShowModal, message }) {
    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
        if (showModal) {
            const id = setTimeout(() => {
                setShowModal(false)
            }, 2000)
            setTimerId(id)
        }

        return () => {
            if (timerId) {
                clearTimeout(timerId)
            }
        }
    }, [showModal])

    return (
        <Modal
            isOpen={showModal}
            onClose={() => { setShowModal(false) }}
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalBody bgColor={theme.colorDark} >
                    <Box flex={1} alignItems="center">
                        <Text
                            padding={10}
                            pt={16}
                            fontWeight="bold"
                            color={theme.colorLight}
                        >
                            {message}
                        </Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
