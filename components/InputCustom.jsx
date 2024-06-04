import React from 'react';
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    Input,
    InputField,
    onChange
} from '@gluestack-ui/themed';
import theme from '@/style/theme';

export function InputCustom({ ErrorMessage = null, isInvalid, placeholder, keyboardType, onChangeText, ...rest }) {
    const invalid = !!ErrorMessage || isInvalid
    return (
        <FormControl isInvalid={invalid}>
            <Input 
                size="lg" 
                width={350}
                isInvalid={invalid} 
                borderWidth={2} 
                borderColor={theme.colorLight}
                $invalid-borderColor="red"    
                {...rest} 
            >
                <InputField 
                    color={theme.colorLight}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    
                />
            </Input>
            <FormControlError>
                <FormControlErrorText>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}