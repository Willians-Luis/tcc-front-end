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
    color,
    placeholderTextColor=theme.colorLight,
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
                {...rest} 
            >
                <InputField 
                    color={color}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    placeholderTextColor={placeholderTextColor}
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