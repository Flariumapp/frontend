import { useState } from 'react';
import OrderCalc from '../../components/order-calc';
import OrderList from '../../components/order-list';
import { Container, HeadingContainer } from '../../styles/resturant';
import { Text } from '../../UI';

const ResturantPage = () => {
    const [foods, setFoods] = useState([]);

    const deleteItem = (id) => {
        const updatedFoods = foods.filter(food => food.id !== id);
        setFoods(updatedFoods);
    }

    const addItem = (food) => {
        setFoods([...foods, food]);
    }

    const orderNow = () => {

    }

    return (
        <Container>
            <HeadingContainer>
                <Text type="heading">Food and Resturants</Text>
            </HeadingContainer>
            <OrderList list={foods} deleteItem={deleteItem} />
            <OrderCalc list={foods} orderNow={orderNow} />
        </Container>
    );
}

export default ResturantPage;