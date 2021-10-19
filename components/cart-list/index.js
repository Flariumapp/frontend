import { Container, List } from './styles';
import { Text } from '../../UI';
import CartCalc from '../cart-calc';
import CartItem from '../cart-item';

const CartList = ({ list = [], orderNow, updateItem, deleteItem, size, type, updateCalc, setUpdateCalc }) => {
    return (
        <Container>
            <Text size={20}>Cart List</Text>
            <div style={{ height: 20 }} />
            <List>
                <CartCalc
                    list={list}
                    orderNow={orderNow}
                    type={type}
                    updateCalc={updateCalc}
                    setUpdateCalc={setUpdateCalc}
                />
                {
                    list.map(item =>
                        <CartItem
                            key={item.id}
                            item={item}
                            updateItem={updateItem}
                            deleteItem={deleteItem}
                            size={size}
                            updateCalc={updateCalc}
                            setUpdateCalc={setUpdateCalc}
                        />
                    )
                }
            </List>
        </Container>
    );
}

export default CartList;