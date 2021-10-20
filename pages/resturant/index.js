import { useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '../../components/product-list';
import { Container } from '../../styles/resturant';
import { Carousel } from '../../UI';
import { getSession } from 'next-auth/client';
import buildClient from '../api/build-client';
import { header } from '../../utility/header';
import { productSubCategoryMapList } from '../../utility/product-category-list';
import { carouselList } from '../../utility/carousel-list';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../../components/cart-list';
import { addCart, deleteCart, updateCart } from '../../store/actions';

const ResturantPage = ({ session, foodList }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const carts = useSelector(state => state.crt.carts);

    const [updateCalc, setUpdateCalc] = useState(false);
    
    const addItem = async (food) => {
        await dispatch(addCart(session.jwt, {
            product: food.id,
            quantity: 1,
        }));   
    }

    const updateItem = async (id, cart) => {
        await dispatch(updateCart(session.jwt, id, cart));
    }

    const deleteItem = async (id) => {
        await dispatch(deleteCart(session.jwt, id));
    }

    const orderNow = () => {
        router.push('/order');
    }

    return (
        <Container>
            <Carousel list={carouselList['food']} />
            <div style={{ height: 20 }} />
            <CartList
                list={carts}
                type='food'
                updateItem={updateItem}
                deleteItem={deleteItem}
                size={80}
                orderNow={orderNow}
                updateCalc={updateCalc}
                setUpdateCalc={setUpdateCalc}
            />
            {
                foodList.map(subCategory => 
                    <ProductList
                        key={subCategory.id}
                        title={subCategory.title}
                        list={subCategory.list}
                        addItem={addItem}
                        deleteItem={deleteItem}
                        orderList={carts}
                    />
                )
            }
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
            }
        }
    }


    const client = buildClient(context);

    
    const response = await client.get('product?category=food', header(session.jwt));
    const { products } = response.data;
    
    const subCategories = productSubCategoryMapList['food'];

    const foodList = [];
    subCategories.forEach(({ id, name }) => {
        foodList.push({
            id,
            title: name,
            list: products.filter(food => food.subCategory === name),
        });
    });

    return {
        props: {
            session,
            foodList,
        }
    }
}

export default ResturantPage;