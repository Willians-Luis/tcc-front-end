import { Box, Center, HStack, Text } from "@gluestack-ui/themed"
import { AntDesign, Octicons, MaterialIcons } from '@expo/vector-icons';
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
            borderTopWidth={1}
            borderColor={theme.colorLight}
        >
            <Link href={"results/Results"} >
                <Center>
                    <Octicons name="graph" size={24} color={theme.colorLight} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorLight}>Resultados</Text>
                </Center>
            </Link>

            <Link href={"customer/Customer"}>
                <Center>
                    <AntDesign name="user" size={24} color={theme.colorLight} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorLight}>Clientes </Text>
                </Center>
            </Link>

            <Link href={"home/Home"} style={{
                height: 75, 
                width: 65, 
                display: "flex",
                justifyContent: "center",
            }}>
                <Center bgColor={theme.colorDark} width={65} height={65} borderRadius="$full" borderWidth={4} borderColor={theme.colorDarkLight}>
                    <AntDesign name="home" size={24} color={theme.backgroundColor}/>
                    <Text fontSize={12} fontWeight="bold" color={theme.backgroundColor}>Início</Text>
                </Center>
            </Link>

            <Link href={"product/Product"} >
                <Center>
                    <AntDesign name="shoppingcart" size={24} color={theme.colorLight} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorLight}>Produtos</Text>
                </Center>
            </Link>


            <Link href={"cashFlow/CashFlow"} >
                <Center>
                    <MaterialIcons name="attach-money" size={24} color={theme.colorLight} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorLight}>Financeiro</Text>
                </Center>
            </Link>
        </HStack>
    )
} 