import { useRef } from 'react';
import {
    Container, Wrapper, Section, Row, Column, FlightSection, PassengerSection, BrandContainer, LocationContainer, Time, Cost, FlightNo, Label, LocationName, TravelClass, Age, FirstName, Gender, Meal, LastName, PassengerContainer, PointContainer
} from './styles';
import { Image, Button } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
// import { exportComponentAsPNG } from 'react-component-export-image';

const BookCard = ({ book }) => {
    const { classType, passengers, cost, flight } = book;

    const size = 120;
    const fontSize = 14;
    const verticalGap = 10;
    const horizontalGap = 10;

    const ref = useRef();

    const downloadPdf = async () => {
        const ticket = document.getElementById('ticket');
        const canvas = await html2canvas(ticket, {
            allowTaint: false,
            useCORS: true,
            logging: true,
        });
        const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jspdf({
            orientation: 'landscape',
            unit: 'px',
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('datauri');
        pdf.save('flarium-ticket.pdf');
        // exportComponentAsPDF(ref);
    }

    const downloadPng = () => {
        // exportComponentAsPNG(ref, {
        //     fileName: 'flarium-ticket.png',
        //     html2CanvasOptions: {
        //         useCORS: true,
        //     }
        // });
    }


    return (
        <Container id="ticket" ref={ref}>
            <Wrapper>
                <Section>
                    <FlightSection>
                        <Row>
                            <Column>
                                <PointContainer>
                                    <LocationContainer size={size}>
                                        <Image
                                            src={galleryUrl(flight.origin.gallery[0])}
                                            alt={flight.origin.name}
                                            height={size}
                                            width={size}
                                        />
                                    </LocationContainer>
                                    <div style={{ height: verticalGap }} />
                                    <LocationName>
                                        {flight.origin.name}
                                    </LocationName>
                                    <div style={{ height: verticalGap }} />
                                    <Time>
                                        {new Date(flight.departure).toLocaleString('en-US')}
                                    </Time>
                                </PointContainer>
                            </Column>
                            {/* <div style={{ width: horizontalGap }} /> */}
                            <Column>
                                <PointContainer>
                                    <LocationContainer size={size}>
                                        <Image
                                            src={galleryUrl(flight.destination.gallery[0])}
                                            alt={flight.destination.name}
                                            height={size}
                                            width={size}
                                        />
                                    </LocationContainer>
                                    <div style={{ height: verticalGap }} />
                                    <LocationName>
                                        {flight.destination.name}
                                    </LocationName>
                                    <div style={{ height: verticalGap }} />
                                    <Time>
                                        {new Date(flight.arrival).toLocaleString('en-US')}
                                    </Time>
                                </PointContainer>
                            </Column>
                        </Row>
                        <div style={{ height: 2 * verticalGap }} />
                        <Row>
                            <Column>
                                <BrandContainer size={size}>
                                    <Image
                                        src={galleryUrl(flight.brand.logo)}
                                        alt={flight.brand.name}
                                        height={size}
                                        width={size}
                                        objectFit="contain"
                                    />
                                </BrandContainer>
                            </Column>
                            <Column />
                        </Row>
                        <div style={{ height: verticalGap }} />
                        <Row>
                            <Column>
                                <Label>
                                    Flight No.
                                </Label>
                            </Column>
                            <Column>
                                <FlightNo>
                                    {flight.flightNo}
                                </FlightNo>
                            </Column>
                        </Row>
                        <div style={{ height: verticalGap }} />
                        <Row>
                            <Column>
                                <Label>
                                    Cost
                                </Label>
                            </Column>
                            <Column>
                                <Cost>
                                    Rs.{cost}
                                </Cost>
                            </Column>
                        </Row>
                        <div style={{ height: verticalGap }} />
                        <Row>
                            <Column>
                                <Label>
                                    Travel Class
                                </Label>
                            </Column>
                            <Column>
                                <TravelClass>
                                    {classType}
                                </TravelClass>
                            </Column>
                        </Row>
                        <div style={{ height: verticalGap }} />
                    </FlightSection>
                </Section>
                <Section>
                    <PassengerSection>
                        <PassengerContainer key={'passenger-legend'} legend>
                            <Row>
                                <Column>
                                    <FirstName>First Name</FirstName>
                                </Column>
                                <Column>
                                    <LastName>Last Name</LastName>
                                </Column>
                                <Column>
                                    <Age>Age</Age>
                                </Column>
                                <Column>
                                    <Gender>Gender</Gender>
                                </Column>
                                <Column>
                                    <Meal>Meal</Meal>
                                </Column>
                            </Row>
                        </PassengerContainer>
                        {
                            passengers.map(({ id, firstName, lastName, age, gender, meal }) => (
                                <PassengerContainer key={id}>
                                    <Row>
                                        <Column>
                                           <FirstName>{firstName}</FirstName>
                                        </Column>
                                        <Column>
                                            <LastName>{lastName}</LastName>
                                        </Column>
                                        <Column>
                                            <Age>{age}</Age>
                                        </Column>
                                        <Column>
                                            <Gender>{gender}</Gender>
                                        </Column>
                                        <Column>
                                            <Meal meal={meal}>{meal}</Meal>
                                        </Column>
                                    </Row>
                                </PassengerContainer>
                            ))
                        }
                        <div style={{ flex: 1 }} />
                        <Row>
                            <Column>
                                <Button
                                    block
                                    size='large'
                                    onPress={downloadPdf}
                                >
                                    Download PDF
                                </Button>
                            </Column>
                            <div style={{ width: horizontalGap }} />
                            <Column>
                                <Button
                                    block
                                    size='large'
                                    onPress={downloadPng}
                                >
                                    Download PNG
                                </Button>
                            </Column>
                        </Row>
                    </PassengerSection>
                </Section>
            </Wrapper>
        </Container>
    );
}

export default BookCard;