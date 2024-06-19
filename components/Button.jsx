import theme from '@/style/theme';
import { ButtonText, Button as GlueButton } from '@gluestack-ui/themed';

export default function Button({ title, color, ...rest }) {
    return (
        <GlueButton
            size="lg"
            variant="solid"
            action="positive"
            isDisabled={false}
            isFocusVisible={false}
            $active-bgColor={theme.colorDarkLight}
            height={35}
            borderRadius={8}
            {...rest}
        >
            <ButtonText color={color}>
                {title}
            </ButtonText>
        </GlueButton>
    )
}