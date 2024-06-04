import { Box, Center, HStack, Text } from "@gluestack-ui/themed"
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import theme from "@/style/theme";

export default function Footer() {
    return (
        <HStack
            height={55}
            justifyContent="space-around"
            alignItems="center"
            backgroundColor={theme.backgroundColor}
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            borderTopWidth={2}
            borderColor={theme.colorDark}
        >
            <Link href={"home/Home"} >
                <Center>
                    <AntDesign name="home" size={30} color={theme.colorLight} />
                    <Text fontSize={12} color={theme.colorLight}>Início</Text>
                </Center>
            </Link>

            <Link href={"results/Results"} >
                <Center>
                    <Octicons name="graph" size={30} color={theme.colorLight} />
                    <Text fontSize={12} color={theme.colorLight}>Resultados</Text>
                </Center>
            </Link>

            <Link href={"product/Product"} >
                <Center>
                    <AntDesign name="shoppingcart" size={30} color={theme.colorLight} />
                    <Text fontSize={12} color={theme.colorLight}>Produtos</Text>
                </Center>
            </Link>

            <Link href={"customer/Customer"} >
                <Center>
                    <AntDesign name="user" size={30} color={theme.colorLight} />
                    <Text fontSize={12} color={theme.colorLight}>Clientes</Text>
                </Center>
            </Link>
        </HStack>
    )
} 