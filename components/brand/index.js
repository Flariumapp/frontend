import { BrandLogo, BrandText, Container } from './styles';
import { appName } from '../../constants/app-config';
import { FaPlaneDeparture } from 'react-icons/fa';
import theme from '../../styles/theme';

const Brand = ({ dark }) => {
    return (
        <Container>
            <BrandLogo>
                <FaPlaneDeparture size={23} color={theme.primary} />
            </BrandLogo>
            <BrandText dark={dark}>
                {appName}
            </BrandText>
        </Container>
    );
}

export default Brand;