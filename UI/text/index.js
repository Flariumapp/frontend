import { Heading, Legend, Paragraph, SuperHeading } from './styles';

const Text = ({ children, type = 'paragraph', color, size, pointer = false, onPress, ...props }) => {
    switch (type) {
        case 'super-heading':
            return (
                <SuperHeading color={color} size={size} pointer={pointer} onClick={onPress} {...props}>
                    {children}
                </SuperHeading>
            );
        case 'heading':
            return (
                <Heading color={color} size={size} pointer={pointer} onClick={onPress} {...props}>
                    {children}
                </Heading>
            );
        case 'legend':
            return (
                <Legend color={color} size={size} pointer={pointer} onClick={onPress} {...props}>
                    {children}
                </Legend>
            );
        case 'paragraph':
            return (
                <Paragraph color={color} size={size} pointer={pointer} onClick={onPress} {...props}>
                    {children}
                </Paragraph>
            );
        default:
            return (
                <Paragraph color={color} size={size} pointer={pointer} onClick={onPress} {...props}>
                    {children}
                </Paragraph>
            );
    }
}

export default Text;