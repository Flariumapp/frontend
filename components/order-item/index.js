import { Text } from '../../UI';
import { Container, Cut, Photo } from './styles';
import { IoIosClose } from 'react-icons/io';

const OrderItem = ({ imageUrl, title, onDelete }) => {
    return (
        <Container>
            <Cut>
                <IoIosClose size={15} onClick={onDelete} />
            </Cut>
            <Wrapper>
                <Photo src={imageUrl} alt={title} height={60} width={60} />
                <Text>{title}</Text>
            </Wrapper>
        </Container>    
    );
}

export default OrderItem;