import theme from "@/style/theme";
import { Modal, ModalBackdrop, ModalBody, ModalContent, Text, ModalFooter } from "@gluestack-ui/themed";
import { Pressable } from "react-native";


export default function Confirm({ showModal, setShowModal, message, onPress }) {
    const handleOkClick = () => {
        onPress()
        setShowModal(false)
    }

    return (
        <Modal
            isOpen={showModal}
            onClose={() => { setShowModal(false) }}
        >
            <ModalBackdrop />
            <ModalContent bgColor={theme.colorDark}>
                <ModalBody>
                    <Text color={theme.colorLight} marginTop={32}>{message}</Text>
                </ModalBody>
                <ModalFooter gap={30}>
                    <Pressable onPress={() => { setShowModal(false) }}>
                        <Text color={theme.colorLight} fontSize={16}>CANCELAR</Text>
                    </Pressable>
                    <Pressable onPress={handleOkClick}>
                        <Text color={theme.colorLight} fontSize={16}>OK</Text>
                    </Pressable>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}
