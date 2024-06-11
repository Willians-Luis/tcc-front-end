import { AntDesign } from "@expo/vector-icons";
import { HStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Card, Heading, Pressable } from "@gluestack-ui/themed";

export default function CardCustom({onPress, title, content, color, bgColor}) {
    return (
        <Card w={"47%"} bgColor={bgColor}>
            <Pressable onPress={onPress} width={"100%"}>

                <HStack width={"100%"} justifyContent="space-between" alignItems="center" gap={20}>
                    {/* <Text>{title}</Text> */}
                    <Heading>{title}</Heading>
                    <AntDesign name="right" size={16} color="black" />
                </HStack>
                
                <Text>{content}</Text>
            </Pressable>
        </Card>
    )
}