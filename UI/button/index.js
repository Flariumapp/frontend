import { Button as Btn } from 'antd';
import { ButtonView, MaterialButtonView } from './styles';
import Loader from 'react-loader-spinner';

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
                {loading ? <Loader type="Oval" color={"#fff"} radius={5} height={20} /> : children}
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