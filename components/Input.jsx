import React from 'react';
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    Input as GlueInput,
    InputField
} from '@gluestack-ui/themed';
import theme from '@/style/theme';

export function Input({ 
    ErrorMessage = null, 
    isInvalid, 
    placeholder, 
    keyboardType, 
    value = null, 
    ...rest 
}) {
    const invalid = !!ErrorMessage || isInvalid
    return (
        <FormControl isInvalid={invalid}>
            <GlueInput 
                size="lg" 
                variant="underlined"
                width={350}
                isInvalid={invalid} 
                $invalid-borderColor="red"   
                borderColor={theme.colorLight}
                {...rest} 
            >
                <InputField 
                    color={theme.colorLight}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={value}
                />
            </GlueInput>
            <FormControlError>
                <FormControlErrorText>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}