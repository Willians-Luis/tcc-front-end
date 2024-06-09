import { Box, Card, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from "@/style/theme";

export default function Container({ children, title, icon = "shoppingcart", ...rest }) {
    return (
        <Card pt={0} px={0} size="md" mt="$3" mx="$4">
            <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                borderBottomWidth={1}
                px={16}
                py={14}
                {...rest}
            >
                <Box flexDirection="row" alignItems="center" gap={4}>
                    {icon === "attach-money"
                        ? <MaterialIcons name="attach-money" size={18} color={theme.colorDarkLight} />
                        : <AntDesign name={icon} size={18} color={theme.colorDarkLight} />
                    }
                    <Text fontSize={18} fontWeight="bold" color={theme.colorText}>
                        {title}
                    </Text>
                </Box>
                <AntDesign name="questioncircleo" size={16} color={theme.colorDarkLight} />
            </Box>
            <Box mt={8}>
                {children}
            </Box>
        </Card>
    )
}