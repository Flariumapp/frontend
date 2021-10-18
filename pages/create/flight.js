import { useState } from 'react';
import { getSession } from 'next-auth/client';
import { Container, Display, Section, InputContainer, Wrapper, InputSection, InputRow } from '../../styles/create/flight';
import { Image, Input, DatePicker, Button, Select } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import SearchInput from '../../components/search-input';
import { useSelector, useDispatch } from 'react-redux';
import { addFlight } from '../../store/actions';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import Map from '../../components/map';
import { terminalList } from '../../utility/terminal-list';
import { gateList } from '../../utility/gate-list';

const CreateFlightPage = ({ session }) => {
    const dispatch = useDispatch();

    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const [brand, setBrand] = useState();

    const [flightNo, setFlightNo] = useState('');
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [gateNo, setGateNo] = useState('');
    const [terminal, setTerminal] = useState('');
    const [baseFare, setBaseFare] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [clearSearch, setClearSearch] = useState(false);

    const size = 180;

    const resetFlightHandler = () => {
        setOrigin(null);
        setDestination(null);
        setBrand(null);
        setFlightNo('');
        setArrival('');
        setDeparture('');
        setGateNo('');
        setTerminal('');
        setBaseFare('');
        setClearSearch(true);
    }

    const addFlightHandler = async () => {
        setIsLoading(true);

        try {
            await dispatch(addFlight(session.jwt, {
                flightNo,
                brand: brand.id,
                origin: origin.id,
                destination: destination.id,
                arrival,
                departure,
                gateNo,
                terminal,
                baseFare,
            }));
            setIsLoading(false);
            message.success('Flight added successfully!');
            resetFlightHandler();
        } catch (err) {
            setIsLoading(false);
            message.error(errConfig(err, 'Flight submission failed!'));
        }
    }

    return (
        <Container>
            <Wrapper>
                <Section>
                    <InputSection>
                        <Display size={size}>
                            {origin && <Image
                                src={galleryUrl(origin.gallery[0])}
                                alt={origin.name}
                                height={size}
                                width={size}
                            />}
                        </Display>
                        <div style={{ width: 10 }} />
                        <SearchInput
                            searchId={'originSearch'}
                            value={origin}
                            setValue={setOrigin}
                            type='location'
                            width={300}
                            placeholder='Origin'
                            size='large'
                            clearSearch={clearSearch}
                            setClearSearch={setClearSearch}
                        />
                    </InputSection>
                    <div style={{ height: 20 }} />
                    <InputSection>
                        <Display size={size}>
                            {destination && <Image
                                src={galleryUrl(destination.gallery[0])}
                                alt={destination.name}
                                height={size}
                                width={size}
                            />}
                        </Display>
                        <div style={{ width: 10 }} />
                        <SearchInput
                            searchId={'destinationSearch'}
                            value={destination}
                            setValue={setDestination}
                            type='location'
                            width={300}
                            placeholder='Destination'
                            size='large'
                            clearSearch={clearSearch}
                            setClearSearch={setClearSearch}
                        />
                    </InputSection>
                    <div style={{ height: 20 }} />
                    <InputSection>
                        <Display size={size}>
                            {brand && <Image
                                src={galleryUrl(brand.logo)}
                                alt={brand.name}
                                height={size}
                                width={size}
                                objectFit="contain"
                            />}
                        </Display>
                        <div style={{ width: 10 }} />
                        <SearchInput
                            searchId={'brandSearch'}
                            value={brand}
                            setValue={setBrand}
                            type='company'
                            width={300}
                            placeholder='Brand'
                            size='large'
                            clearSearch={clearSearch}
                            setClearSearch={setClearSearch}
                        />
                    </InputSection>
                </Section>
                <Section>
                    <InputContainer>
                        <Input
                            value={flightNo}
                            setValue={setFlightNo}
                            placeholder='Flight No.'
                            size='large'
                        />
                        <div style={{ height: 20 }} />
                        <InputRow>
                            <DatePicker
                                value={arrival}
                                setValue={setArrival}
                                placeholder='Arrival Time'
                                size='large'
                            />
                            <div style={{ width: 20 }} />
                            <DatePicker
                                value={departure}
                                setValue={setDeparture}
                                placeholder='Departure Time'
                                size='large'
                            />
                        </InputRow>
                        <div style={{ height: 20 }} />
                        <InputRow>
                            <Select
                                value={gateNo}
                                setValue={setGateNo}
                                placeholder='Gate No.'
                                size='large'
                                list={gateList}
                            />
                            <div style={{ width: 20 }} />
                            <Select
                                value={terminal}
                                setValue={setTerminal}
                                placeholder='Terminal'
                                size='large'
                                list={terminalList}
                            />
                        </InputRow>
                        <div style={{ height: 20 }} />
                        <Input
                            value={baseFare}
                            setValue={setBaseFare}
                            placeholder='Base Fare'
                            type='number'
                            size='large'
                        />
                        {/* <div style={{ height: 20 }} />
                        <Map height={200} /> */}
                        <div style={{ flex: 1 }} />
                        <Button block size='large' onPress={addFlightHandler} loading={isLoading}>Add Flight</Button>
                    </InputContainer>
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
        };
    }

    if (!session.currentUser.isAdmin) {
        return {
            redirect: {
                destination: '/',
            }
        };
    }

    return {
        props: {
            session,
        }
    }
}

export default CreateFlightPage;