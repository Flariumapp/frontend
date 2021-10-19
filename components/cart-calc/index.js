import { useEffect, useState } from 'react';
import { Text, Button } from '../../UI';
import { Container, TextContainer } from './styles';

const CartCalc = ({ list = [], orderNow, type, updateCalc, setUpdateCalc }) => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const count = list.length;
        let total = 0;
    
        for (const key in list) {
            total += (list[key].product.price) * (list[key].quantity);
        }

        setCount(count);
        setTotal(total);
    }, [list]);
  
    useEffect(() => {
        if (updateCalc) {
            const count = list.length;
            let total = 0;
        
            for (const key in list) {
                total += (list[key].product.price) * (list[key].quantity);
            }
    
            setCount(count);
            setTotal(total);
            setUpdateCalc(false);
        }
    }, [updateCalc]);

    return (
        <Container>
            <Text style={{ fontSize: 15 }}>{type === 'food' ? 'Food' : 'Dress'} Items = {count}</Text>
            <Text style={{ fontSize: 15 }}>Total Price = {total}</Text>
            <div style={{ height: 15 }} />
            <Button onPress={orderNow} block>Order Now</Button>
        </Container>
    );
}

export default CartCalc;