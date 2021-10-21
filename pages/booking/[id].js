import { useState, useEffect } from 'react';
import { Container, Section, Wrapper, InfoSection, PassengerSection, Form } from '../../styles/booking';
import { Input, Select, Button } from '../../UI';
import { useSelector, useDispatch } from 'react-redux';
import FlightCard from '../../components/flight-card';
import { classTypes } from '../../utility/class-types';
import { getSession } from 'next-auth/client';
import PassengerCard from '../../components/passenger-card';
import { addPassenger, removePassenger, addBooking } from '../../store/actions';
import PassengerModal from '../../components/passenger-modal';
import buildClient from '../api/build-client';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';

const BookingPage = ({ session, flight }) => {
    const dispatch = useDispatch();

    const passengers = useSelector(state => state.buk.passengers);
    const ids = useSelector(state => state.buk.ids);

    const [classType, setClassType] = useState();
    const [imageIndex, setImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (passengers) {
            setImageIndex(passengers.length);
        }
    }, [passengers]);

    const bookFlight = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await dispatch(addBooking(session.jwt, {
                classType,
                passengers: ids,
                flight: flight.id,
            }));
            message.success('Flight Booked Successfully!');
            setIsLoading(false);
        } catch (err) {
            message.error(errConfig(err, 'Flight booking failed!'));
            setIsLoading(false);
        }
    }

    const openModal = () => {
        setShowModal(true);
    }

    const removePassengerHandler = async (id) => {
        try {
            await dispatch(removePassenger(session.jwt, id));
        } catch (err) {
            message.error(errConfig(err, 'Error removing passenger!'));
        }
    }

    const verticalGap = 20;

    return (
        <Container>
            <Wrapper>
                <Section>
                    <PassengerSection>
                        {
                            passengers.map(passenger => {
                                return (
                                    <PassengerCard
                                        key={passenger.id}
                                        passenger={passenger}
                                        removePassenger={removePassengerHandler}
                                    />
                                );
                            })
                        }
                        <PassengerCard
                            key={'add-plate'}
                            onPress={openModal}
                            addPlate
                        />
                    </PassengerSection>
                </Section>
                <Section>
                    <Form onSubmit={bookFlight}>
                        <InfoSection>
                                <FlightCard flight={flight} />
                                <div style={{ height: verticalGap }} />
                                <Select
                                    list={classTypes}
                                    value={classType}
                                    setValue={setClassType}
                                    placeholder="Travel Class"
                                    size='large'
                                />
                                <div style={{ flex: 1 }} />
                                <Button loading={isLoading} htmlType='submit' block size='large'>Confirm Booking</Button>
                        </InfoSection>
                    </Form>
                </Section>
            </Wrapper>
            <PassengerModal
                flight={flight}
                imageIndex={imageIndex}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const session = await getSession({ req: context.req });

    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
            }
        };
    }

    const client = buildClient(context);

    const response = await client.get('flight/' + id);

    const { flight } = response.data;

    return {
        props: {
            session,
            flight,
        }
    }
}

export default BookingPage;