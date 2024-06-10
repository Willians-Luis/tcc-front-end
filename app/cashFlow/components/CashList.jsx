import { Box, Card, FlatList, Text } from "@gluestack-ui/themed"
import CashListItem from "./CashListItem"
import theme from "@/style/theme"
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons"

export default function CashList({ data, handleDeleteExpense }) {

    return (
        <Card height={"42.5%"} px={0}>
            <Box
                flexDirection="row"
                borderBottomWidth={1}
                borderColor={theme.colorText}
                px={8}
                pb={4}
            >
                <Box flexDirection="row" alignItems="center" gap={4}>
                    <AntDesign name="filetext1" size={14} color={theme.colorDark2} />
                    <Text color={theme.colorText}>Descrição</Text>
                </Box>
                <Box marginLeft={"37%"} flexDirection="row" alignItems="center" gap={4}>
                    <FontAwesome name="dollar" size={14} color={theme.colorDark2} />
                    <Text color={theme.colorText} >Valor</Text>
                </Box>

            </Box>
            {data?.length > 0
                ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <CashListItem item={item} handleDeleteExpense={handleDeleteExpense} />
                    )}
                />
                : <Box>
                    <Text color={theme.colorLight} >Nenhum registro encontrado!</Text>
                </Box>
            }
        </Card>
    )
}