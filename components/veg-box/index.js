import { Container, Circle, Square } from './styles';

const VegBox = ({ size = 30, veg = false }) => {
    return (
        <Container>
            <Square size={size} veg={veg}>
                <Circle size={size} veg={veg} />
            </Square>
        </Container>
    );
}

export default VegBox;