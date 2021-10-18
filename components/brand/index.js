import { BrandLogo, BrandText, Container } from './styles';
import { appName } from '../../constants/app-config';
import { FaPlaneDeparture } from 'react-icons/fa';
import theme from '../../styles/theme';

const Brand = ({ dark, size = 23, onPress }) => {
    return (
        <Container onClick={onPress}>
            <BrandLogo>
                <FaPlaneDeparture size={size} color={theme.primary} />
            </BrandLogo>
            <BrandText size={size} dark={dark}>
                {appName}
            </BrandText>
        </Container>
    );
}

export default Brand;