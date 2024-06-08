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
      <ModalContent bgColor={item.backgroundColor}>
        <ModalHeader>
          <Heading size="lg" color={item.textColor}>{item.nome}</Heading>
          <ModalCloseButton>
            <AntDesign name="close" size={20} color={item.textColor} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text color={item.textColor}>
            Quant. disponível: {item.quantidade}
          </Text>
          <Text color={item.textColor}>
            Preço de custo: {numberForMoney(item.valorCusto)}
          </Text>
          <Text color={item.textColor}>
            Preço de venda: {numberForMoney(item.valorVenda)}
          </Text>
          <Text color={item.textColor} display={item.descricao?.length > 0 ? "flex" : "none"}>
            Descrição: {item.descricao}
          </Text>
        </ModalBody>
        <ModalFooter gap={30}>
          <Pressable onPress={() => { setShowModal(false) }}>
            <Box width={40} alignItems="center">
              <Feather name="edit" size={24} color={item.textColor} />
              <Text fontSize={12} color={item.textColor}>Editar</Text>
            </Box>
          </Pressable>
          <Pressable onPress={() => { setShowModal(false) }}>
            <Box width={40} alignItems="center">
              <AntDesign name="delete" size={24} color={item.textColor} />
              <Text fontSize={12} color={item.textColor}>Excluir</Text>
            </Box>
          </Pressable>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}
