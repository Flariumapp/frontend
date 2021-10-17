import { useState } from 'react';
import { getSession } from 'next-auth/client';
import { Container, Display, Section, InputContainer, Wrapper, InputSection } from '../../styles/create/flight';
import { Image, Input, DatePicker, Button } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import SearchInput from '../../components/search-input';


const CreateFlightPage = ({ session }) => {
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const [brand, setBrand] = useState();

    const [flightNo, setFlightNo] = useState('');
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [gateNo, setGateNo] = useState('');
    const [terminal, setTerminal] = useState('');
    const [baseFare, setBaseFare] = useState();

    const size = 180;

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
                        <DatePicker
                            value={arrival}
                            setValue={setArrival}
                            placeholder='Arrival Time'
                            size='large'
                        />
                        <div style={{ height: 20 }} />
                        <DatePicker
                            value={departure}
                            setValue={setDeparture}
                            placeholder='Departure Time'
                            size='large'
                        />
                        <div style={{ height: 20 }} />
                        <Input
                            value={gateNo}
                            setValue={setGateNo}
                            placeholder='Gate No.'
                            size='large'
                        />
                        <div style={{ height: 20 }} />
                        <Input
                            value={terminal}
                            setValue={setTerminal}
                            placeholder='Terminal'
                            size='large'
                        />
                        <div style={{ height: 20 }} />
                        <Input
                            value={baseFare}
                            setValue={setBaseFare}
                            placeholder='Base Fare'
                            type='number'
                            size='large'
                        />
                        <div style={{ height: 20 }} />
                        <Button block size='large'>Add Flight</Button>
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