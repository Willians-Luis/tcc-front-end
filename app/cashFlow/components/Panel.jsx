import { Box, Card , Text } from "@gluestack-ui/themed";
import { MaterialIcons  } from '@expo/vector-icons';
import { numberForMoney } from "@/services/numberForMoney";

export default function Panel({name, icon, value}) {
    return (
        <Card 
            size="sm" 
            variant="elevated"  
            justifyContent="space-between"
            alignItems="center"
            width={"32%"}
        >
            <Box flexDirection="row" gap={4} height={30} alignItems="center" >
                <MaterialIcons  name={icon} size={20} color="#000" />
                <Text>{name}</Text>
            </Box>
            <Text fontWeight="bold" >{numberForMoney(value)}</Text>
        </Card>
    )
}