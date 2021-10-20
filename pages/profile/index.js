import { useEffect, useState } from 'react';
import {
    Container, Wrapper, Section, IdentitySection, Name, InfoSection, InfoRow, InfoCol, InfoLabel, InfoText, OrderList, OrderItem, OrderItemDisplay, OrderItemName, Border,
} from '../../styles/profile';
import buildClient from '../api/build-client';
import { header } from '../../utility/header';
import { getSession } from 'next-auth/client';
import ProfileCircle from '../../components/profile-circle';
import { Text, Image, Empty } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import theme from '../../styles/theme';
import ProfileModal from '../../components/profile-modal';
 
const ProfilePage = ({ session, orders }) => {
    const [currentUser, setCurrentUser] = useState(session.currentUser);

    const [bookings, setBookings] = useState([]);
    const [showModal, setShowModal] = useState(false);
    // const [orders, setOrders] = useState([]);

    useEffect(() => {
        setCurrentUser(session.currentUser);
    }, [session]);

    const size = 90;

    let list = [];

    orders.map(order => {
        const subList = order.carts.map(cart => {
            const { product } = cart;
            return product;
        });
        
        list = [...list, ...subList];
    });

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <Container>
            <Wrapper>
                <Section>
                    <IdentitySection>
                        <ProfileCircle size={150} bordered overlay onPress={openModal} />
                        <div style={{ height: 10 }} />
                        <Name>
                            {currentUser.firstName + ' ' + currentUser.lastName}
                        </Name>
                    </IdentitySection>
                    <InfoSection>
                        <InfoRow>
                            <InfoCol>
                                <InfoLabel>
                                    Total Bookings
                                </InfoLabel>
                                <InfoText>
                                    {bookings.length}
                                </InfoText>
                            </InfoCol>
                            <InfoCol>
                                <InfoLabel>
                                    Next Flight Timings
                                </InfoLabel>
                                <InfoText>
                                    -
                                </InfoText>
                            </InfoCol>
                            <InfoCol>
                                <InfoLabel>
                                    Items Ordered
                                </InfoLabel>
                                <InfoText>
                                    {orders.length}
                                </InfoText>
                            </InfoCol>
                        </InfoRow>
                    </InfoSection>
                </Section>
                <div style={{ height: 50 }} />
                <Text type='paragraph' color={theme.darkish}>
                    Your Recent Items Ordered
                </Text>
                <div style={{ height: 20 }} />
                <OrderList>
                    {
                        list.map(item => (
                            <OrderItem key={item.id}>
                                <Border>
                                    <OrderItemDisplay size={size}>
                                        <Image
                                            src={galleryUrl(item.gallery[0])}
                                            alt={item.name}
                                            width={size}
                                            height={size}
                                        />
                                    </OrderItemDisplay>
                                </Border>
                                <div style={{ height: 10 }} />
                                <OrderItemName>
                                    {item.name}
                                </OrderItemName>
                            </OrderItem>
                        ))
                    }
                </OrderList>
                <div style={{ height: 50 }} />
                <Text type='paragraph' color={theme.darkish}>
                    Your Recent Flight Bookings
                </Text>
                <div style={{ height: 20 }} />
                <Empty />
                <div style={{ height: 100 }} />
            </Wrapper>
            <ProfileModal
                showModal={showModal}
                setShowModal={setShowModal}
            />
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

    const response = await client.get('order', header(session.jwt));

    const { orders } = response.data;

    return {
        props: {
            session,
            orders,
        }
    }
}

export default ProfilePage;