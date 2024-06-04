import { Box, Card, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from "@/style/theme";

export default function Container({ children, title, icon = "shoppingcart", ...rest }) {
    return (
        <Card
            px={10}
            pt={2}
            variant="elevated"
            elevation={2}
            borderWidth={2}
            borderColor={theme.colorDark}
            backgroundColor={theme.backgroundColor}
            {...rest}
        >
            <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                height={50}
            >
                <Box flexDirection="row" alignItems="center" gap={4}>
                    {icon === "attach-money"
                        ? <MaterialIcons name="attach-money" size={18} color={theme.colorLight} />
                        : <AntDesign name={icon} size={18} color={theme.colorLight} />
                    }
                    <Text fontSize={20} color={theme.colorLight}>
                        {title}
                    </Text>
                </Box>
                <AntDesign name="questioncircleo" size={18} color={theme.colorLight} />
            </Box>
            {children}
        </Card>
    )
}