import { Box, Card, Text } from "@gluestack-ui/themed";
import { AntDesign, Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from "@/style/theme";

export default function Container({ children, title, icon = "shopping-cart", ...rest }) {
    return (
        <Card pt={0} px={0} size="md" mx={16}>
            <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                px={8}
                pt={14}
                pb={0}
                {...rest}
            >
                <Box flexDirection="row" alignItems="center" gap={4}>
                    
                    <Feather name={icon} size={18} color={theme.colorDarkLight} />

                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>
                        {title}
                    </Text>
                </Box>
                <AntDesign name="questioncircleo" size={16} color={theme.colorDarkLight} />
            </Box>
            <Box>
                {children}
            </Box>
        </Card>
    )
}