import theme from "@/style/theme";
import { Box, FlatList, Pressable, Text } from "@gluestack-ui/themed";

export default function DatePicker({ date, datePicker, isClicked }) {

    const Item = ({ item }) => {
        return (
            <Pressable
                width={80}
                onPress={() => datePicker(item)}
                disabled={isClicked === item}
                borderBottomWidth={2}
                borderColor={isClicked === item ? theme.colorLight : theme.colorDark2}
                px={20}
                alignItems="center"
            >
                <Text
                    color={isClicked === item ? theme.colorLight : theme.colorDark2}
                    fontWeight={isClicked === item ? "$bold" : "$normal"}
                >
                    {item}
                </Text>
                <Text
                    color={isClicked === item ? theme.colorLight : theme.colorDark2}
                    fontWeight={isClicked === item ? "$bold" : "$normal"}
                >
                    2024
                </Text>
            </Pressable>
        )
    }

    const YOUR_ITEM_HEIGHT = 80

    const getItemLayout = (data, index) => (
        { length: YOUR_ITEM_HEIGHT, offset: YOUR_ITEM_HEIGHT * index, index }
    )

    return (
        <Box>
            <FlatList
                data={date}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Item item={item} />
                )}
                initialScrollIndex={date.length - 1}
                getItemLayout={getItemLayout}
            />
        </Box>
    )
}