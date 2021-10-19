import { Container, List } from './styles';
import OrderItem from '../order-item';
import { Text } from '../../UI';
import OrderCalc from '../order-calc';

const OrderList = ({ list = [], orderNow, deleteItem, size, type }) => {
    return (
        <Container>
            <Text size={20}>Order List</Text>
            <div style={{ height: 20 }} />
            <List>
                <OrderCalc list={list} orderNow={orderNow} type={type} />
                {
                    list.map(item =>
                        <OrderItem
                            key={item.id}
                            item={item}
                            onDelete={() => deleteItem(item.id)}
                            size={size}
                        />
                    )
                }
            </List>
        </Container>
    );
}

export default OrderList;