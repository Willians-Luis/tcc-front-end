import { Box, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import theme from "@/style/theme";

export default function CustomerFilter() {
    return (
        <Box gap={8} padding={4} >
            <Box flexDirection="column">
                <Text color={theme.colorLight}>Filtrar</Text>
                <Box
                    padding={5}
                    borderRadius={5}
                    width="$full"
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor={theme.colorDark}
                >
                    <Text color={theme.colorLight}>Todos</Text>
                    <AntDesign name="down" size={16} color={theme.colorLight} />
                </Box>
            </Box>
            <Box flexDirection="column">
                <Text color={theme.colorLight}>Ordenar</Text>
                <Box
                    padding={5}
                    borderRadius={5}
                    width="$full"
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor={theme.colorDark}
                >
                    <Text color={theme.colorLight}>Data de Registro</Text>
                    <AntDesign name="down" size={16} color={theme.colorLight} />
                </Box>
            </Box>
        </Box>

    )
}