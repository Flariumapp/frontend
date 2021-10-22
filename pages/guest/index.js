import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Text, Input, Button, DatePicker } from '../../UI';
import {
  Container, Section, InputSection, AppLegendContainer, AppLegendLarge, AppLegendMedium, Wrapper, FeatureSection, PartnerContainer, PartnerLogo, PartnerSection
} from '../../styles/guest';
import { features } from '../../data/features';
import { partners } from '../../data/partners';
import SearchInput from '../../components/search-input';

const GuestPage = () => {
  const router = useRouter();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const [clearSearch, setClearSearch] = useState(false);

  const searchFlights = () => {
    router.push('flights/' + buildFlightQuery(from, to, date));
  }

  return (
    <Container>
      <Wrapper>
        <AppLegendContainer>
          <AppLegendMedium>
            WHERE
          </AppLegendMedium>
          <AppLegendMedium>
            DO YOU WANT TO
          </AppLegendMedium>
          <AppLegendLarge>
            EXPLORE
          </AppLegendLarge>
        </AppLegendContainer>
        <Section>
          <InputSection>
            <SearchInput
              clearSearch={clearSearch}
              setClearSearch={setClearSearch}
              searchId={'GuestOriginSearch'}
              label={'Origin'}
              placeholder={'Origin Point'}
              glass
              value={from}
              setValue={setFrom}
              width={300}
              type='location'
            />
            <div style={{ width: 10 }} />
            <SearchInput
              clearSearch={clearSearch}
              setClearSearch={setClearSearch}
              searchId={'GuestDestinationSearch'}
              label={'Destination'}
              placeholder={'Destination Point'}
              glass
              value={to}
              setValue={setTo}
              width={300}
              type='location'
            />
            <div style={{ width: 10 }} />
            <DatePicker
              id={'GuestDatePicker'}
              clearSearch={clearSearch}
              setClearSearch={setClearSearch}
              searchId={'GuestDateSearch'}
              label={'Date'}
              placeholder={'Travel Date'}
              glass
              value={date}
              setValue={setDate}
              width={200}
            />
            <div style={{ width: 10 }} />
            <Button glass onPress={searchFlights}>
              Go
            </Button>
          </InputSection>
        </Section>
      </Wrapper>
      {/* <Section>
        <Text type='heading' color={'#fff'}>Features and Benefits</Text>
        <div style={{ height: 20 }} />
        <FeatureSection>
          {
            features.map(feature =>
              <React.Fragment key={feature.id}>
                <Card
                  glass
                  title={feature.title}
                  description={feature.description}
                />
                <div style={{ width: 20 }} />
              </React.Fragment>
            )
          }
        </FeatureSection>
      </Section> */}
      {/* <Section>
        <Text type='heading' color={'#fff'}>Associated Flight Partners</Text>
        <div style={{ height: 20 }} />
        <PartnerSection>
          {
            partners.map(partner =>
              <React.Fragment key={partner.id}>
                <PartnerContainer>
                  <PartnerLogo src={partner.logo} alt={partner.brand} height={100} width={100} />
                </PartnerContainer>
                <div style={{ width: 30 }} />
              </React.Fragment>
            )
          }
        </PartnerSection>
      </Section> */}
    </Container>
  );
}

export default GuestPage;