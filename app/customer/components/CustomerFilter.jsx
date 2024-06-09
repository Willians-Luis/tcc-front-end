import { Box, Card, Text } from "@gluestack-ui/themed";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import theme from "@/style/theme";
import { Center } from "@gluestack-ui/themed";

export default function CustomerFilter() {
    return (
        <Card padding={16} size="md" mt="$3" mx="$4" alignItems="center" 
        justifyContent="space-between" flexDirection="row">
            <Center flexDirection="row" gap={10}>
                <FontAwesome name="filter" size={18} color={theme.colorDarkLight} />
                <Text fontSize={18} fontWeight="bold" color={theme.colorText}>Filtro</Text>
            </Center>
            <Box>
                <AntDesign name="down" size={16} color={theme.colorDarkLight} />
            </Box>
        </Card>

    )
}