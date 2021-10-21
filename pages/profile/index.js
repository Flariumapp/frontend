import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    Container, Wrapper, Section, IdentitySection, Name, InfoSection, InfoRow, InfoCol, InfoLabel, InfoText, OrderList, OrderItem, OrderItemDisplay, OrderItemName, Border, OptionSection
} from '../../styles/profile';
import buildClient from '../api/build-client';
import { header } from '../../utility/header';
import { getSession } from 'next-auth/client';
import ProfileCircle from '../../components/profile-circle';
import { Text, Image, Empty } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import theme from '../../styles/theme';
import ProfileModal from '../../components/profile-modal';
import CreateCard from '../../components/create-card';
import { profileOptionsList } from '../../utility/profile-options-list';
import { ProfileOptionMap } from '../../utility/profile-option-map';
 
const ProfilePage = ({ session, wallet, orders }) => {
    const router = useRouter();
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

    const goToCreateRoute = (path) => {
        router.push(path);
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
                    Profile Options
                </Text>
                <OptionSection>
                    {
                        profileOptionsList.map(option => {
                            if (option.type === ProfileOptionMap.AddWallet) {
                                if (wallet) {
                                    return null;
                                }
                            }

                            return <CreateCard
                                id={option.id}
                                illustration={option.illustration}
                                path={option.path}
                                title={option.title}
                                goToCreateRoute={goToCreateRoute}
                                defaultPath='/profile'
                            />
                        })
                    }
                </OptionSection>
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

    const response1 = await client.get('order', header(session.jwt));

    const { orders } = response1.data;


    const response2 = await client.get('my-wallet', header(session.jwt));

    const { wallet } = response2.data;

    return {
        props: {
            session,
            orders,
            wallet,
        }
    }
}

export default ProfilePage;