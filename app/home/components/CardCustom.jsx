import theme from "@/style/theme";
import { AntDesign } from "@expo/vector-icons";
import { Box, HStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Card, Heading, Pressable } from "@gluestack-ui/themed";

export default function CardCustom({ onPress, title, content, color, bgColor }) {
    return (
        <Card w={"47%"} bgColor={bgColor} p={2}>
            <Box w={"100%"} p={8} borderRadius={5}>
                <Pressable onPress={onPress} width={"100%"}>

                    <HStack width={"100%"} justifyContent="space-between" alignItems="center" gap={20}>
                        <Heading>{title}</Heading>
                        <AntDesign name="right" size={16} color={theme.colorDarkLight} />
                    </HStack>

                    <Text>{content}</Text>
                </Pressable>
            </Box>
        </Card>
    )
}