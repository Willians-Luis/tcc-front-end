import {
  Box,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  ModalFooter,
  Heading
} from "@gluestack-ui/themed";
import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import theme from "@/style/theme";
import { numberForMoney } from "@/services/numberForMoney";

export default function ProductDetails({ showModal, setShowModal, item }) {

  return (
    <Modal
      isOpen={showModal}
      onClose={() => { setShowModal(false) }}
    >
      <ModalBackdrop />
      <ModalContent bgColor={theme.colorDark}>
        <ModalHeader>
          <Heading size="lg" color={theme.colorLight}>{item.nome}</Heading>
          <ModalCloseButton>
            <AntDesign name="close" size={20} color={theme.colorLight} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text color={theme.colorLight}>
            Quant. disponível: {item.quantidade}
          </Text>
          <Text color={theme.colorLight}>
            Preço de custo: {numberForMoney(item.valorCusto)}
          </Text>
          <Text color={theme.colorLight}>
            Preço de venda: {numberForMoney(item.valorVenda)}
          </Text>
          <Text color={theme.colorLight} display={item.descricao?.length > 0 ? "flex" : "none"}>
            Descrição: {item.descricao}
          </Text>
        </ModalBody>
        <ModalFooter gap={30}>
          <Pressable onPress={() => { setShowModal(false) }}>
            <Box width={40} alignItems="center">
              <Feather name="edit" size={24} color={theme.colorLight} />
              <Text fontSize={12} color={theme.colorLight}>Editar</Text>
            </Box>
          </Pressable>
          <Pressable onPress={() => { setShowModal(false) }}>
            <Box width={40} alignItems="center">
              <AntDesign name="delete" size={24} color={theme.colorLight} />
              <Text fontSize={12} color={theme.colorLight}>Excluir</Text>
            </Box>
          </Pressable>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}
