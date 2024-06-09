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
    placeholderTextColor,
    keyboardType, 
    value = null, 
    ...rest 
}) {
    const invalid = !!ErrorMessage || isInvalid
    return (
        <FormControl isInvalid={invalid}>
            <GlueInput 
                size="lg" 
                variant="rounded"
                width={300}
                isInvalid={invalid} 
                $invalid-borderColor="red"   
                borderColor={theme.colorLight}
                {...rest} 
            >
                <InputField 
                    color={theme.colorLight}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
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