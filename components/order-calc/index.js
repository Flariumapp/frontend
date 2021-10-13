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
            <TextContainer>
                <Text>{type === 'food' ? 'Food' : 'Dress'} Items = {count}</Text>
                <div style={{ width: 20 }} />
                <Text>Total Price = {total}</Text>
            </TextContainer>
            <div style={{ height: 20 }} />
            <Button size="large" onPress={orderNow}>Order Now</Button>
        </Container>
    );
}

export default OrderCalc;