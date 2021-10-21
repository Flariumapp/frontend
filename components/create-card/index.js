import { Container, Display, Info } from './styles';
import { Image, Text } from '../../UI';

const CreateCard = ({ id, title, illustration, path, goToCreateRoute, defaultPath = '/create' }) => {
    return (
        <Container onClick={() => goToCreateRoute(defaultPath + path)}>
            <Display>
                <Image src={illustration} alt={title} height={100} width={120} objectFit={'contain'} />
            </Display>
            <div style={{ height: 10 }} /> 
            <Info>
                <Text>{title}</Text>
            </Info>
        </Container>        
    );
}

export default CreateCard;