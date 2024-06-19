import React from 'react';
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    Input as GlueInput,
    InputField
} from '@gluestack-ui/themed';
import theme from '@/style/theme';
import { AntDesign, Fontisto } from '@expo/vector-icons';

export function Input({ 
    ErrorMessage = null, 
    isInvalid, 
    placeholder, 
    placeholderTextColor,
    keyboardType, 
    onChangeText,
    type = "text",
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
                $invalid-borderColor="#f00"   
                borderColor={theme.colorLight}
                alignItems="center"
                pr={16}
                {...rest} 
            >
                <InputField 
                    color={theme.colorLight}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    type={type}
                    onChangeText={onChangeText}
                />
                {type === "text" && <Fontisto name="email" size={22} color={theme.colorDarkLight} />}
                {type === "password" && <AntDesign name="lock" size={22} color={theme.colorDarkLight} />}
            </GlueInput>
            <FormControlError>
                <FormControlErrorText color='#f00'>
                    {ErrorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}