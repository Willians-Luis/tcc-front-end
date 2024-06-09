import { Card, Center, Text } from "@gluestack-ui/themed"
import {  Entypo, FontAwesome } from '@expo/vector-icons';
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
                    <Entypo name="bar-graph" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Resultados</Text>
                </Center>
            </Link>

            <Link href={"customer/Customer"}>
                <Center>
                    <FontAwesome name="user" size={24} color={theme.colorDark} />
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
                    <FontAwesome name="home" size={24} color={theme.colorLight}/>
                    <Text fontSize={12} fontWeight="bold" color={theme.colorLight}>Início</Text>
                </Center>
            </Link>

            <Link href={"product/Product"} >
                <Center>
                    <FontAwesome name="product-hunt" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Produtos</Text>
                </Center>
            </Link>


            <Link href={"cashFlow/CashFlow"} >
                <Center>
                    <FontAwesome name="dollar" size={24} color={theme.colorDark} />
                    <Text fontSize={12} fontWeight="bold" color={theme.colorDark}>Financeiro</Text>
                </Center>
            </Link>
        </Card>
    )
} 