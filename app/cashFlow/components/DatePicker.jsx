import theme from "@/style/theme";
import { Box, FlatList, Pressable, Text } from "@gluestack-ui/themed";

export default function DatePicker({ data, datePicker, isClicked}) {
    const Item = ({item}) => {
        return (
            <Pressable 
                onPress={() => datePicker(item)}
                disabled={isClicked === item}
                borderBottomWidth={2}
                borderColor={isClicked === item ? theme.colorLight : theme.colorDark2}
                px={16}
            >
                <Text 
                    color={isClicked === item ? theme.colorLight : theme.colorDark2}
                    fontWeight="bold"
                >
                    {item}
                </Text>
            </Pressable>
        )
    } 

    return (
        <Box>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <Item item={item} />
                )}
            />
        </Box>
    )
}