import { Heading, Legend, Paragraph, SuperHeading } from './styles';

const Text = ({ children, type = 'paragraph', color, size, pointer = false, onPress }) => {
    switch (type) {
        case 'super-heading':
            return (
                <SuperHeading color={color} size={size} pointer={pointer} onClick={onPress}>
                    {children}
                </SuperHeading>
            );
        case 'heading':
            return (
                <Heading color={color} size={size} pointer={pointer} onClick={onPress}>
                    {children}
                </Heading>
            );
        case 'legend':
            return (
                <Legend color={color} size={size} pointer={pointer} onClick={onPress}>
                    {children}
                </Legend>
            );
        case 'paragraph':
            return (
                <Paragraph color={color} size={size} pointer={pointer} onClick={onPress}>
                    {children}
                </Paragraph>
            );
        default:
            return (
                <Paragraph color={color} size={size} pointer={pointer} onClick={onPress}>
                    {children}
                </Paragraph>
            );
    }
}

export default Text;