import { Text, Image } from '../../UI';
import {
    Container, Wrapper, Cut, Title, Row
} from './styles';
import { IoIosClose } from 'react-icons/io';
import { galleryUrl } from '../../utility/media-url';
import theme from '../../styles/theme';

const OrderItem = ({ item, onDelete, size = 60 }) => {
    const { name, gallery, subCategory, meta, price } = item;

    return (
        <Container>
            <Row>
                <div style={{ flex: 1 }} />
                <IoIosClose size={20} onClick={onDelete} color={theme.darkish} />
            </Row>
            <Wrapper size={size}>
                <Image src={galleryUrl(gallery[0])} alt={name} height={size} width={size} />
            </Wrapper>
            <Title>{name}</Title>
        </Container>    
    );
}

export default OrderItem;