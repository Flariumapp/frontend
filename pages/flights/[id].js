import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { Container, Wrapper, Column, Row, Display, Label, Value, Logo, LocationSection, LocationName } from '../../styles/flights/detail';
import buildClient from '../api/build-client';
import { Image, Button, Text } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import { setBookingFlight } from '../../store/actions';
import { useDispatch } from 'react-redux';

const FlightDetailPage = ({ session, flight }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { flightNo, origin, destination, brand, arrival, departure, gateNo, terminal, status, baseFare } = flight;

    const fare = baseFare;

    const details = [
        {
            id: 'd1',
            label: 'Flight No.',
            value: flightNo,
        },
        {
            id: 'd2',
            label: 'Arrival',
            value: new Date(arrival).toLocaleString('en-US'),
        },
        {
            id: 'd3',
            label: 'Departure',
            value: new Date(departure).toLocaleString('en-US'),
        },
        {
            id: 'd4',
            label: 'Brand',
            value: brand,
        },
        {
            id: 'd5',
            label: 'Gate No.',
            value: gateNo,
        },
        {
            id: 'd6',
            label: 'Terminal',
            value: terminal,
        },
        {
            id: 'd7',
            label: 'Status',
            value: status,
        },
        {
            id: 'd8',
            label: 'Cost',
            value: fare,
        }
    ];

    const locationSize = 180;
    const columnSeperation = 40;


    const bookFlight = () => {
        if (session && session.currentUser) {
            dispatch(setBookingFlight(flight));
            router.push('/booking/' + flight.id);
        } else {
            router.push('/auth');
        }
    }   

    return (
        <Container>
            <Wrapper>
                <Row key={'d0'}>
                    <Column>
                        <Display size={locationSize}>
                            <Image
                                src={galleryUrl(origin.gallery[0])}
                                alt={origin.name}
                                height={locationSize}
                                width={locationSize}
                            />
                        </Display>
                        <div style={{ height: 10 }} />
                        <LocationName>{origin.name}</LocationName>
                    </Column>
                    <div style={{ width: columnSeperation }} />
                    <Column>
                        <Display size={locationSize}>
                            <Image
                                src={galleryUrl(destination.gallery[0])}
                                alt={destination.name}
                                height={locationSize}
                                width={locationSize}
                            />
                        </Display>
                        <div style={{ height: 10 }} />
                        <LocationName>{destination.name}</LocationName>
                    </Column>
                </Row>
                {
                    details.map(({ id, label, value }) => {
                        if (label === 'Brand') {
                            const size = 60;
                            return (
                                <Row key={id}>
                                    <Column>
                                        <Label>{label}</Label>
                                    </Column>
                                    <div style={{ width: columnSeperation }} />
                                    <Column>
                                        <Logo size={size}>
                                            <Image
                                                src={galleryUrl(value.logo)}
                                                alt={value.name}
                                                height={size}
                                                width={size}
                                                objectFit='contain'
                                            />
                                        </Logo>
                                    </Column>
                                </Row>
                            );
                        }

                        if (label == 'Cost') {
                            return (
                                <Row key={id}>
                                    <Column>
                                        <Label>{label}</Label>
                                    </Column>
                                    <div style={{ width: columnSeperation }} />
                                    <Column>
                                        <Value>Rs.{value}</Value>
                                    </Column>
                                </Row>
                            );
                        }

                        return (
                            <Row key={id}>
                                <Column>
                                    <Label>{label}</Label>
                                </Column>
                                <div style={{ width: columnSeperation }} />
                                <Column>
                                    <Value>{value}</Value>
                                </Column>
                            </Row>
                        );
                    })
                }
                <div style={{ height: 20 }} />
                <Row>
                    <Button size={'large'} block onPress={bookFlight}>Book Flight</Button>
                </Row>
            </Wrapper>
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const { params } = context;
    const id = params.id;

    const session = await getSession({ req: context.req });

    // if (!session || !session.currentUser) {
    //     return {
    //         redirect: {
    //             destination: '/guest',
    //         }
    //     };
    // }

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

export default FlightDetailPage;