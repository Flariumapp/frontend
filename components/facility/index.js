import React from 'react';
import { Container, Display, GlassContainer, Text, Wrapper } from './styles';

const Facility = ({ icon, text, glass = false }) => {

    if (glass) {
        return (
            <Container glass={glass}>
                <GlassContainer>
                    <Wrapper>
                        <Display>
                            {icon}
                        </Display>
                        <Text>
                            {text}
                        </Text>
                    </Wrapper>
                </GlassContainer>
            </Container>
        );
    }

    return (
        <Container glass={glass}>
            <Wrapper>
                <Display>
                    {icon}
                </Display>
                <Text>
                    {text}
                </Text>
            </Wrapper>
        </Container>
    );
}

export default Facility;