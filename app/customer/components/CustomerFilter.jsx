import { Box, Card, Text } from "@gluestack-ui/themed";
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import theme from "@/style/theme";
import { Center } from "@gluestack-ui/themed";

export default function CustomerFilter() {
    return (
        <Card px={8} py={16}  size="md" alignItems="center" 
        justifyContent="space-between" flexDirection="row">
            <Center flexDirection="row" gap={4}>
                <Feather name="filter" size={18} color={theme.colorDarkLight} />
                <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Filtro</Text>
            </Center>
            <Box>
                <AntDesign name="down" size={16} color={theme.colorDarkLight} />
            </Box>
        </Card>

    )
}