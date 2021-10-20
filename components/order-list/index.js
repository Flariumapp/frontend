import { Container, List } from './styles';
import OrderItem from '../order-item';

const OrderList = ({ list = [], orderNow, deleteItem, size, type }) => {
    return (
        <Container>
            <List>
                {
                    list.map(item =>
                        <OrderItem
                            key={item.id}
                            item={item}
                            deleteItem={deleteItem}
                            size={size}
                        />
                    )
                }
            </List>
        </Container>
    );
}

export default OrderList;