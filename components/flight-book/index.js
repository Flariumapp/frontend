import React from 'react';
import { Container, Display, Logo, Section, Airport, Status, Text, Wrapper, GlassContainer } from './styles';
import { StatusHash } from '../../utility/book-status-map';

const FlightBook = ({ logo, company, origin, destination, date, passenger, price, status, glass }) => {

    if (glass) {
        return (
            <Container glass={glass}>
                <GlassContainer>
                    <Wrapper>
                        <Section>
                            <Display>
                                <Logo src={logo} alt={company} />
                            </Display>
                        </Section>
                        <Section>
                            <Text><Airport>{origin}</Airport>to<Airport>{destination}</Airport></Text>
                        </Section>
                        <Section>
                            <Text>{date}</Text>
                        </Section>
                        <Section>
                            <Text>{passenger} Passenger</Text>
                        </Section>
                        <Section>
                            <Text>Rs.{price}</Text>
                        </Section>
                        <Section>
                            <Status color={StatusHash[status]}>{status}</Status>
                        </Section>
                    </Wrapper>
                </GlassContainer>
            </Container>
        );
    }

    return (
        <Container glass={glass}>
            <Wrapper>
                <Section>
                    <Display>
                        <Logo src={logo} alt={company} />
                    </Display>
                </Section>
                <Section>
                    <Text><Airport>{origin}</Airport>to<Airport>{destination}</Airport></Text>
                </Section>
                <Section>
                    <Text>{date}</Text>
                </Section>
                <Section>
                    <Text>{passenger} Passenger</Text>
                </Section>
                <Section>
                    <Text>Rs.{price}</Text>
                </Section>
                <Section>
                    <Status color={StatusHash[status]}>{status}</Status>
                </Section>
            </Wrapper>
        </Container>
    );
}

export default FlightBook;