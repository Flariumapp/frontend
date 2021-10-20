import { getSession } from 'next-auth/client';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../../components/order-list';
import { Container, Section, Wrapper, InfoSection } from '../../styles/order';
import buildClient from '../api/build-client';
import { Button } from '../../UI';
import OrderCalc from '../../components/order-calc';
import { deleteCart, addOrder, resetCart } from '../../store/actions';
import { useState } from 'react';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';

const OrderPage = ({ session }) => {
    const dispatch = useDispatch();

    const carts = useSelector(state => state.crt.carts);
    const ids = useSelector(state => state.crt.ids);
    
    const deleteItem = async (id) => {
        await dispatch(deleteCart(session.jwt, id));
    }

    const order = async (price) => {
        try {
            await dispatch(addOrder(session.jwt, {
                price,
                carts: ids,
            }));
            message.success('Products ordered successfully!');
            dispatch(resetCart());
        } catch (err) {
            message.error(errConfig(err, 'Products order failed!'));
        }
    }

    return (
        <Container>
            <Wrapper>
                <Section>
                    <OrderList list={carts} deleteItem={deleteItem} />
                </Section>
                <Section>
                    <InfoSection>
                        <OrderCalc list={carts} order={order} />
                    </InfoSection>
                </Section>
            </Wrapper>
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

    return {
        props: {
            session,
        }
    }
}

export default OrderPage;