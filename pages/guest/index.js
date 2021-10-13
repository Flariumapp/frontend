import React, { useState } from 'react';
import { Text, Input, Button, Card } from '../../UI';
import { Container, Section, InputSection, FeatureSection, PartnerContainer, PartnerLogo, PartnerSection } from '../../styles/guest';
import { features } from '../../data/features';
import { partners } from '../../data/partners';

const GuestPage = () => {
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
      </Section>
      <Section>
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
      </Section>
    </Container>
  );
}

export default GuestPage;