import { Card, InputField, Pressable } from "@gluestack-ui/themed";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "@/style/theme";
import { Input } from "@gluestack-ui/themed";

export default function CustomerFilter({value, onChageText, handleOrder}) {
    return (
        <Card 
            px={8} 
            py={16} 
            size="md" 
            alignItems="center"
            justifyContent="space-between" 
            flexDirection="row" 
            borderRadius={8}
        >
            <Input 
                variant="outline" 
                size="md" 
                isDisabled={false} 
                isInvalid={false} 
                isReadOnly={false} 
                width={"85%"}
                alignItems="center"
                pl={4}
                borderColor={theme.colorDark}
                borderRadius={8}
            >
                <Feather name="search" size={18} color={theme.colorDark} />
                <InputField
                    onChangeText={onChageText}
                    value={value}
                    placeholder="Pesquise um cliente"
                    placeholderTextColor={theme.colorDark}
                />
            </Input>
            
            <Pressable 
                $active-backgroundColor={theme.colorDarkLight} 
                borderRadius={8}
                onPress={handleOrder}
            >
                <MaterialCommunityIcons 
                    name="order-alphabetical-ascending" 
                    size={30} 
                    color={theme.colorDark}
                />
            </Pressable>
        </Card>

    )
}