import { Card, Center, Text } from "@gluestack-ui/themed"
import {  AntDesign, Feather} from '@expo/vector-icons';
import { Link } from "expo-router";
import theme from "@/style/theme";


export default function Footer() {
    return (
        <Card
            variant="elevated"
            elevation={4}
            flexDirection="row"
            p={0}
            height={55}
            justifyContent="space-around"
            alignItems="center"
            backgroundColor={theme.colorLight}
            position="absolute"
            bottom={0}
            left={0}
            right={0} 
        >
            <Link href={"results/Results"}>
                <Center>
                    <Feather name="bar-chart" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Resultados</Text>
                </Center>
            </Link>

            <Link href={"customer/Customer"}>
                <Center>
                    <Feather name="user" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Clientes </Text>
                </Center>
            </Link>

            <Link href={"home/Home"} style={{
                height: 75, 
                width: 65, 
                display: "flex",
                justifyContent: "center",
            }}>
                <Center bgColor={theme.colorDark} width={65} height={65} borderRadius="$full" 
                borderWidth={4} borderColor={theme.colorDarkLight}>
                    <AntDesign name="home" size={24} color={theme.colorLight}/>
                    <Text fontSize={12} fontWeight="bold" color={theme.colorLight}>Início</Text>
                </Center>
            </Link>

            <Link href={"product/Product"} >
                <Center>
                    <Feather name="list" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Produtos</Text>
                </Center>
            </Link>


            <Link href={"cashFlow/CashFlow"} >
                <Center>
                    <Feather name="dollar-sign" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Financeiro</Text>
                </Center>
            </Link>
        </Card>
    )
} 