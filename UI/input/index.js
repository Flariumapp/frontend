import { Input as Ipt } from 'antd';
import { Container, Label, TextContainer, UnderlinedContainer, TextInput } from './styles';

const { TextArea } = Ipt;

const Input = ({ glass = false, underlined = false, value, setValue, color, placeholder, label, labelColor, width, height, size, prefix, type = 'text', rows, maxLength = 2500 }) => {
    if (type === 'text-area') {
        return <TextArea
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            size={size}
            rows={rows}
        />
    }

    if (glass) {
        return (
            <Container width={width}>
                <TextContainer width={width} height={height}>
                    <Label labelColor={labelColor}>{label}</Label>
                    <TextInput
                        value={value}
                        color={color}
                        placeholder={placeholder}
                        onChange={e => setValue(e.target.value)}
                        type={type}
                    />
                </TextContainer>
            </Container>
        );
    }

    if (underlined) {
        return (
            <Container width={width}>
                <UnderlinedContainer>
                    <Label labelColor={labelColor}>{label}</Label>
                    <div style={{ height: 8 }} />
                    <TextInput
                        value={value}
                        color={color}
                        placeholder={placeholder}
                        onChange={e => setValue(e.target.value)}
                        type={type}
                        autoComplete="one-time-code"
                    />
                </UnderlinedContainer>
            </Container>
        );
    }

    return (
        <Ipt
            placeholder={placeholder}
            prefix={prefix}
            size={size}
            value={value}
            onChange={e => setValue(e.target.value)}
            type={type}
            maxLength={maxLength}
            autoComplete='nope'
        />
    );
}

export default Input;