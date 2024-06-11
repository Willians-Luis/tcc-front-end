import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";


export default function SetingsRightStack() {
    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const navigation = useNavigation()

    return (
        <Box flexDirection="row" alignItems="center" gap={20}>
            <Text color={theme.colorLight} fontSize={18}>Olá, {user?.name}</Text>
            <FontAwesome name="bell-o" size={18} color={theme.colorLight} />
            <Pressable onPress={() => navigation.navigate("index")}>
                <Feather name="log-out" size={18} color={theme.colorLight} />
            </Pressable>
            
        </Box>
    )
}