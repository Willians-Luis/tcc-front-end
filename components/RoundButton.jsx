import { Pressable, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import theme from "@/style/theme";

export default function RoundButton({title = "Adicionar", onPress, ...rest }) {
    return (
            <Pressable
                onPress={onPress}
                flexDirection="row"
                backgroundColor={theme.colorDark}
                width={"100%"}
                borderRadius={8}
                justifyContent="center"
                alignItems="center"
                $active-backgroundColor={theme.colorDarkLight}
                p={8}
                {...rest}

            >
                {/* <AntDesign name="plus" size={20} color={theme.colorLight} /> */}
                <Text color={theme.colorLight} fontSize={18}>{title}</Text>
            </Pressable>
    )
}