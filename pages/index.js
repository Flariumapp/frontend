import React, { Fragment, useState } from 'react';
import { Text, Input, Button } from '../UI';
import { Container, Section, InputSection, FlightBookContainer, FacilityContainer, FacilityRow } from '../styles';
import Facility from '../components/facility';
import FlightBook from '../components/flight-book';
import { airportFacilities, boardingFacilities } from '../data/facilities';
import { flightBooks } from '../data/bookings';

const HomePage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  return (
    <Container>
      <Text type='super-heading' color='#fff'>
        Building Your
      </Text>
      <Text type='super-heading' color='#fff' size={80}>
        Airport Experience
      </Text>
      <Section>
        <InputSection>
          <Input
            label={'From'}
            placeholder={'Starting Point'}
            glass
            value={from}
            setValue={setFrom}
            width={300}
          />
          <div style={{ width: 10 }} />
          <Input
            label={'To'}
            placeholder={'Destination Point'}
            glass
            value={to}
            setValue={setTo}
            width={300}
          />
          <div style={{ width: 10 }} />
          <Input
            label={'Date'}
            placeholder={'Travel Date'}
            glass
            value={date}
            setValue={setDate}
            width={200}
          />
          <div style={{ width: 10 }} />
          <Button glass>
            Go
          </Button>
        </InputSection>
      </Section>
      <Section>
        <FlightBookContainer>
          <Text type="legend" color="#fff">Your recent flight bookings</Text>
          {
              flightBooks.map(f => {
                  return (
                      <FlightBook
                          key={f.id}
                          company={f.company}
                          logo={f.logo}
                          origin={f.origin}
                          destination={f.destination}
                          date={f.date}
                          passenger={f.passenger}
                          price={f.price}
                          status={f.status}
                          glass
                      />
                  );
              })   
          }
        </FlightBookContainer>
        <div style={{ height: 30 }} />
      </Section>
      <Section>
        <FacilityContainer>
            <Text type="legend" color="#fff">Airport Facilities</Text>
            <div style={{ height: 20 }} />
            <FacilityRow>
                {
                    airportFacilities.map(f => {
                      return (
                          <Fragment key={f.id}>
                            <Facility
                              key={f.id}
                              icon={f.icon}
                              text={f.text}
                              glass
                            />
                            <div style={{ width: 20 }} />
                          </Fragment>
                        );
                    })
                }
            </FacilityRow>
            <div style={{ height: 40 }} />
            <Text type="legend" color="#fff">Boarding Facilities</Text>
            <div style={{ height: 20 }} />
            <FacilityRow>
                {
                    boardingFacilities.map(f => {
                        return (
                          <Fragment key={f.id}>
                            <Facility
                              key={f.id}
                              icon={f.icon}
                              text={f.text}
                              glass
                            />
                            <div style={{ width: 20 }} />
                          </Fragment>
                        );
                    })
                }
            </FacilityRow>
        </FacilityContainer>
      </Section>
      <div style={{ height: 100 }} />
    </Container>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
        
    },
  }
}

export default HomePage;