import { Box, Card , Text } from "@gluestack-ui/themed";
import { Feather, MaterialIcons  } from '@expo/vector-icons';
import { numberForMoney } from "@/services/numberForMoney";
import theme from "@/style/theme";
import FormattedMoney from "@/components/FormattedMoney";

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
            <FormattedMoney 
                value={value}
                fontWeight="bold" 
                color={value >= 0 ? (icon === "dollar-sign" ? "#29b806" :theme.colorText) : "#f00"}
             />
        </Card>
    )
}