import { Box, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';

export default function CustomerFilter() {
    return (
        <Box gap={8} padding={4} >
            <Box flexDirection="column">
                <Text>Filtrar</Text>
                <Box
                    borderWidth={1}
                    padding={5}
                    borderRadius={5}
                    width="$full"
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text>Todos</Text>
                    <AntDesign name="down" size={16} color="black" />
                </Box>
            </Box>
            <Box flexDirection="column">
                <Text>Ordenar</Text>
                <Box
                    borderWidth={1}
                    padding={5}
                    borderRadius={5}
                    width="$full"
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text>Data de Registro</Text>
                    <AntDesign name="down" size={16} color="black" />
                </Box>
            </Box>
        </Box>

    )
}