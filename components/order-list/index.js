import { Container, List } from './styles';
import OrderItem from '../order-item';
import { Text } from '../../UI';

const OrderList = ({ list = [], deleteItem }) => {
    return (
        <Container>
            <Text size={20}>Order List</Text>
            <div style={{ height: 20 }} />
            <List>
                {
                    list.map(item =>
                        <OrderItem
                            key={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            onDelete={() => deleteItem(item.id)}
                        />
                    )
                }
            </List>
        </Container>
    );
}

export default OrderList;