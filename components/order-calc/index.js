import { Text, Button } from '../../UI';
import { Container, TextContainer } from './styles';

const OrderCalc = ({ list = [], orderNow, type }) => {
    const count = list.length;
    let total = 0;

    for (const key in list) {
        total += list[key].price;
    }

    return (
        <Container>
            <Text style={{ fontSize: 15 }}>{type === 'food' ? 'Food' : 'Dress'} Items = {count}</Text>
            <Text style={{ fontSize: 15 }}>Total Price = {total}</Text>
            <div style={{ height: 15 }} />
            <Button onPress={orderNow} block>Order Now</Button>
        </Container>
    );
}

export default OrderCalc;