import { Box, Spinner } from "@gluestack-ui/themed"

export default function Loading({ ...rest }) {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Spinner size="large" {...rest} />
        </Box>
    )
} 