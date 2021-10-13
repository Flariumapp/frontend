import { Button as Btn } from 'antd';
import { ButtonView, MaterialButtonView } from './styles';

const Button = ({ children, glass = false, material = false, height, width, size, type = 'primary', block = false , loading = false, disabled = false, onPress }) => {
    if (glass) {
        return (
            <ButtonView height={height} width={width} onClick={onPress}>
                {children}
            </ButtonView>
        );
    }

    if (material) {
        return (
            <MaterialButtonView block={block} onClick={onPress}>
                {children}
            </MaterialButtonView>
        );
    }

    return (
        <Btn
            type={type}
            block={block}
            size={size}
            loading={loading}
            disabled={disabled}
            onClick={onPress}
        >{children}</Btn>
    );
}

export default Button;