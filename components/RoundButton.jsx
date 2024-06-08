import { Box, Pressable } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import theme from "@/style/theme";

export default function RoundButton({ onPress, ...rest }) {
    return (
        <Box 
            mt={8} 
            w="$full" 
            justifyContent="center" 
            alignItems="center"
        >
            <Pressable
                onPress={onPress}
                backgroundColor={theme.colorDark}
                height={40}
                width={40}
                borderRadius="$full"
                justifyContent="center"
                alignItems="center"
                {...rest}
            >
                <AntDesign name="plus" size={36} color={theme.colorLight} />
            </Pressable>
        </Box>
    )
}