import theme from "@/style/theme";
import { FormControl, FormControlError, FormControlErrorText, Textarea as GlueTextarea, TextareaInput } from "@gluestack-ui/themed";


export function Textarea({ErrorMessage, ...rest}) {
    const invalid = !!ErrorMessage

    return (
        <FormControl isInvalid={invalid}>
            <GlueTextarea
                size="lg"
                width={350}
                height={75}
                isInvalid={invalid} 
                borderWidth={2} 
                borderColor={theme.colorLight}
                $invalid-borderColor="red"
            >
                <TextareaInput 
                    color={theme.colorLight}
                    {...rest} 
                />
            </GlueTextarea>
            <FormControlError>
                <FormControlErrorText>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}