import { Container, LocationContainer, Column, Row } from './styles';
import { Image, Text } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import theme from '../../styles/theme';

const FlightCard = ({ flight }) => {
    const { origin, destination } = flight;

    const size = 70;

    return (
        <Container>
            <Row>
                <Column>
                    <LocationContainer size={size}>
                        <Image
                            src={galleryUrl(origin.gallery[0])}
                            width={size}
                            height={size}
                        />
                    </LocationContainer>
                    <div style={{ height: 10 }} />
                    <Text style={{ fontSize: 14 }} color={theme.primary}>
                        {origin.name}
                    </Text>
                </Column>
                <Column>
                    <Text style={{ fontSize: 14 }} color={theme.darkish}>
                        To
                    </Text>
                </Column>
                <Column>
                    <LocationContainer size={size}>
                        <Image
                            src={galleryUrl(destination.gallery[0])}
                            width={size}
                            height={size}
                        />
                    </LocationContainer>
                    <div style={{ height: 10 }} />
                    <Text style={{ fontSize: 14 }} color={theme.primary}>
                        {destination.name}
                    </Text>
                </Column>
            </Row>
        </Container>
    );
}

export default FlightCard;