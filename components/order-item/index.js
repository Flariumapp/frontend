import {
    Container, Display, Photo, Quantity, Cost, Title, CostContainer, QuantityContainer, TitleContainer, IconContainer,
} from './styles';
import { IoIosClose } from 'react-icons/io';
import { galleryUrl } from '../../utility/media-url';
import theme from '../../styles/theme';

const OrderItem = ({ item, deleteItem, size = 60 }) => {
    const { id, product, quantity } = item;
    const { name, price, gallery } = product;

    const deleteCart = () => {
        deleteItem(id);
    }

    return (
        <Container>
            <Display size={size}>
                <Photo
                    loader={() => galleryUrl(gallery[0])}
                    src={galleryUrl(gallery[0])}
                    height={size}
                    width={size}
                    objectFit='cover'
                />
            </Display>
            <TitleContainer>
                <Title>
                    {name}
                </Title>
            </TitleContainer>
            <CostContainer>
                <Cost>
                    Rs.{price}
                </Cost>
            </CostContainer>
            <QuantityContainer>
                <Quantity>
                    x{' '}{quantity}
                </Quantity>
            </QuantityContainer>
            <IconContainer>
                <IoIosClose
                    size={25}
                    onClick={deleteCart}
                    color={theme.danger}
                    style={{ margin: 0 }}
                />
            </IconContainer>
        </Container>    
    );
}

export default OrderItem;