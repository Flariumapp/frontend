import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DatePicker, Button, Table, Image } from '../../UI';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import {
    Container, EntrySection, FlightsTable, Form, InputContainer, InputSection, Display, Logo, Status, LoadingContainer, LoaderSection, FieldContainer, FieldText
} from '../../styles/flights';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlights } from '../../store/actions';
import Loader from 'react-loader-spinner';
// import { flights } from '../../data/flights';
import { getSession } from 'next-auth/client';
import buildClient from '../api/build-client';
import { galleryUrl } from '../../utility/media-url';
import { FlightStatusHash } from '../../utility/flight-status-map';
import SearchInput from '../../components/search-input';
import { buildFlightQuery, buildFlightQueryWithIds } from '../../utility/build-flight-query';
import theme from '../../styles/theme';

const FlightsPage = ({ session, flights, originInit, destinationInit, departureInit }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const flts = useSelector(state => state.flt.flights);

    const [flightList, setFlightList] = useState(flights);

    const [origin, setOrigin] = useState(originInit);
    const [destination, setDestination] = useState(destinationInit);
    const [departure, setDeparture] = useState(departureInit);

    const [isLoading, setIsLoading] = useState(false);
    const [clearSearch, setClearSearch] = useState(false);

    const size = 60;

    useEffect(() => {
        if (flts) {
            setFlightList(flts);
        }
    }, [flts]);

    const searchByFilter = async () => {
        setIsLoading(true);
        await dispatch(fetchFlights(session.jwt, buildFlightQuery(origin, destination, departure)));
        setIsLoading(false);
    }
    
    const goToFlightDetail = (id) => {
        router.push('/flights/' + id);
    }

    const columns = [
        {
            title: 'Flight No.',
            dataIndex: 'flightNo',
            key: 'flightno',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: ({logo, name}) => {
                return (
                    <FieldContainer>
                        <Display size={size}>
                            <Image
                                src={galleryUrl(logo)}
                                alt={name}
                                height={size}
                                width={size}
                                objectFit='contain'
                            />
                        </Display>
                        <div style={{ height: 10 }} />
                        <FieldText>{name}</FieldText>
                    </FieldContainer>
                )
            }
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            key: 'origin',
            render: ({name, country, gallery}) => {
                return (
                    <FieldContainer>
                        <Display size={size}>
                            <Image
                                src={galleryUrl(gallery[0])}
                                alt={name}
                                height={size}
                                width={size}
                            />
                        </Display>
                        <div style={{ height: 10 }} />
                        <FieldText>{name}</FieldText>
                    </FieldContainer>
                )
            }
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',
            render: ({ name, country, gallery }) => {
                return (
                    <FieldContainer>
                        <Display size={size}>
                            <Image
                                src={galleryUrl(gallery[0])}
                                alt={name}
                                height={size}
                                width={size}
                            />
                        </Display>
                        <div style={{ height: 10 }} />
                        <FieldText>{name}</FieldText>
                    </FieldContainer>
                )
            }
        },
        {
            title: 'Arrival Time',
            dataIndex: 'arrival',
            key: 'arrivaltime',
            render: (time) => {
                const timeF = new Date(time).toLocaleString('en-US');
                return (
                    <FieldContainer>
                        <FieldText>
                            {timeF}
                        </FieldText>
                    </FieldContainer>
                );
            }
        },
        {
            title: 'Departure Time',
            dataIndex: 'departure',
            key: 'departuretime',
            render: (time) => {
                const timeF = new Date(time).toLocaleString('en-US');
                return (
                    <FieldContainer>
                        <FieldText>
                            {timeF}
                        </FieldText>
                    </FieldContainer>
                );
            }
        },
        {
            title: 'Terminal',
            dataIndex: 'terminal',
            key: 'terminal',
        },
        {
            title: 'Gate No.',
            dataIndex: 'gateNo',
            key: 'gateno',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Status color={FlightStatusHash[status].color}>
                    {FlightStatusHash[status].text}
                </Status>
            )
        },
        {
            title: 'View',
            dataIndex: 'view',
            key: 'view',
            render: (text, record, index) => (
                <Button onPress={() => goToFlightDetail(record.id)}>
                    View
                </Button>
            )
        }
    ];

    if(isLoading) {
        return (
            <LoadingContainer>
                <LoaderSection>
                    <Loader type="Rings" color={theme.primary} />
                </LoaderSection>
            </LoadingContainer>
        );
    }
    
    return (
        <Container>
            <EntrySection>
                <Form>
                    <InputSection>
                        <InputContainer>
                            <SearchInput
                                searchId='flightOriginSearch'
                                size="large"
                                prefix={<FiMapPin color={"#707070"} />}
                                placeholder="Origin"
                                value={origin}
                                setValue={setOrigin}
                                clearSearch={clearSearch}
                                setClearSearch={setClearSearch}
                                type='location'
                            />
                        </InputContainer>
                        <div style={{ width: 20 }} />
                        <InputContainer>
                            <SearchInput
                                searchId='flightDestinationSearch'
                                size="large"
                                prefix={<FiMapPin color={"#707070"} />}
                                placeholder="Destination"
                                value={destination}
                                setValue={setDestination}
                                clearSearch={clearSearch}
                                setClearSearch={setClearSearch}
                                type='location'
                            />
                        </InputContainer>
                        <div style={{ width: 20 }} />
                        <InputContainer>
                            <DatePicker
                                value={departure}
                                setValue={setDeparture}
                                size="large"
                                prefix={<FiCalendar color={"#707070"} />}
                                placeholder="Date and Time"
                            />
                        </InputContainer>
                        <div style={{ width: 20 }} />
                        <InputContainer>
                            <Button size="large" type="primary" block onPress={searchByFilter}>Search avialable flights</Button>
                        </InputContainer>
                    </InputSection>
                </Form>
            </EntrySection>
            <FlightsTable>
                <Table columns={columns} dataSource={flightList} onPress={goToFlightDetail}  />
            </FlightsTable>
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const { query } = context;

    let apiRoute = 'flight';
    let originInit = '';
    let destinationInit = '';
    let departureInit = '';

    if (query && Object.keys(query).length > 0) {
        console.log('query', query);
        originInit = query.origin || null;
        destinationInit = query.destination || null;
        departureInit = query.departure || null;
        const modifiedQuery = buildFlightQueryWithIds(originInit, destinationInit, departureInit);
        apiRoute = 'flight' + modifiedQuery;
        console.log('apiRoute', apiRoute);
    }

    const session = await getSession({ req: context.req });
    
    const client = buildClient(context);
    const { data } = await client.get(apiRoute);    
    let flights = [];

    if (data) {
        flights = data.flights;
    }


    return {
        props: {
            session,
            flights,
            originInit,
            destinationInit,
            departureInit,
        }
    }
}

export default FlightsPage;