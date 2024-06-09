import { apiGetAllCategories, apiGetCategory } from "@/api/categoryRoute"
import theme from "@/style/theme"
import { Box, FlatList, FormControl, FormControlError, FormControlErrorText, Pressable, Text } from "@gluestack-ui/themed"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Item = ({ item, handleCategory, isClicked}) => {

    return (
        <Pressable onPress={() => handleCategory(item)}>
            <Box
                p={8}
                mr={8}
                alignItems="center"
                borderRadius={5}
                borderWidth={2}
                borderColor={theme.colorDark}
                backgroundColor={isClicked === item.id ? theme.colorLight : theme.colorDark}
            >
                <Text fontSize="$lg" color={isClicked === item.id ? theme.colorDark : theme.colorLight}>
                    {item.nome}
                </Text>
            </Box>
        </Pressable>
    )
}

export default function CategoryFilter({
    onPress = () => { return null },
    onChangeText = () => { return null },
    ErrorMessage= null
}) {

    const { user } = useSelector(rootReducer => rootReducer.userReducer)
    const [data, setData] = useState()
    const [isClicked, setIsClicked] = useState(false)
    const invalid = !!ErrorMessage

    const fetchCategories = async () => {
        const data = await apiGetAllCategories(user.accessToken)
        setData(data)
    }

    const fetchCategory = async (id) => {
        const data = await apiGetCategory(id, user.accessToken)
        onPress(data.produtos)
    }

    const handleCategory = (item) => {
        fetchCategory(item.id)
        onChangeText(item.id)
        setIsClicked(item.id)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <Box gap={4} width="$full">
            <FormControl isInvalid={invalid}>
                <FlatList
                    horizontal
                    width="$full"
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                            handleCategory={handleCategory}
                            isClicked={isClicked}
                        />
                    )}
                />
                <FormControlError>
                    <FormControlErrorText>
                        {ErrorMessage}
                    </FormControlErrorText>
                </FormControlError>
            </FormControl>
        </Box>
    )
}

