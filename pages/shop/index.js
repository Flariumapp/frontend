import { useState } from 'react';
import ProductList from '../../components/product-list';
import { Container } from '../../styles/resturant';
import { Carousel } from '../../UI';
import { getSession } from 'next-auth/client';
import buildClient from '../api/build-client';
import { header } from '../../utility/header';
import { productSubCategoryMapList } from '../../utility/product-category-list';
import { carouselList } from '../../utility/carousel-list';
import CartList from '../../components/cart-list';
import { updateCart, deleteCart, addCart } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const ShopPage = ({ session, clothList }) => {
    const dispatch = useDispatch();

    const carts = useSelector(state => state.crt.carts);

    const [updateCalc, setUpdateCalc] = useState(false);

    const addItem = async (cloth) => {
        await dispatch(addCart(session.jwt, {
            product: cloth.id,
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

    }

    return (
        <Container>
            <Carousel list={carouselList['cloth']} />
            <div style={{ height: 20 }} />
            <CartList
                list={carts}
                type='cloth'
                updateItem={updateItem}
                deleteItem={deleteItem}
                size={80}
                orderNow={orderNow}
                updateCalc={updateCalc}
                setUpdateCalc={setUpdateCalc}
            />
            {
                clothList.map(subCategory => 
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

    
    const response = await client.get('product?category=cloth', header(session.jwt));
    const { products } = response.data;
    
    const subCategories = productSubCategoryMapList['cloth'];

    const clothList = [];
    subCategories.forEach(({ id, name }) => {
        clothList.push({
            id,
            title: name,
            list: products.filter(cloth => cloth.subCategory === name),
        });
    });

    return {
        props: {
            session,
            clothList,
        }
    }
}

export default ShopPage;