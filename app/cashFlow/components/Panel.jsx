import { Box, Card , Text } from "@gluestack-ui/themed";
import { Feather, MaterialIcons  } from '@expo/vector-icons';
import { numberForMoney } from "@/services/numberForMoney";
import theme from "@/style/theme";

export default function Panel({name, icon, iconColor, value}) {
    return (
        <Card 
            size="sm" 
            variant="elevated"  
            justifyContent="space-between"
            alignItems="center"
            width={"32%"}
            p={0}
            py={8}
        >
            <Box flexDirection="row" gap={4} height={30} alignItems="center" >
                <Feather name={icon} size={20} color={iconColor} />
                <Text>{name}</Text>
            </Box>
            <Text 
                fontWeight="bold" 
                color={value >= 0 ? theme.colorText : "#f00"}
            >
                {numberForMoney(value)}
            </Text>
        </Card>
    )
}