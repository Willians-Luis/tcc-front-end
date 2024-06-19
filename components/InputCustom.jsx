import React from 'react';
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    Input,
    InputField
} from '@gluestack-ui/themed';
import theme from '@/style/theme';

export function InputCustom({ 
    ErrorMessage = null, 
    isInvalid, 
    keyboardType, 
    onChangeText, 
    value,
    placeholder, 
    color=theme.colorDark,
    placeholderTextColor=theme.colorDarkLight, 
    ...rest 
}) {
    const invalid = !!ErrorMessage || isInvalid
    return (
        <FormControl isInvalid={invalid} width={"100%"}>
            <Input 
                size="lg" 
                width={"100%"}
                isInvalid={invalid} 
                borderRadius={8}
                borderColor={theme.colorDarkLight}
                $invalid-borderColor="red"    
                backgroundColor={theme.colorLight}
                {...rest} 
            >
                <InputField 
                    color={color}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    value={value}
                    
                />
            </Input>
            <FormControlError>
                <FormControlErrorText color='#f00'>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}