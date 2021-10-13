import { Container } from "./styles";

const Background = ({ children, img }) => {
    return (
        <Container img={img}>
            {children}
        </Container>
    );
}

export default Background;