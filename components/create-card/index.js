import { Container, Display, Info } from './styles';
import { Image, Text } from '../../UI';
import { createType } from '../../utility/create-type';

const CreateCard = ({ id, title, illustration, path, goToCreateRoute }) => {
    return (
        <Container onClick={() => goToCreateRoute(path)}>
            <Display>
                <Image src={illustration} alt={title} height={100} width={120} />
            </Display>
            <div style={{ height: 10 }} /> 
            <Info>
                <Text>{title}</Text>
            </Info>
        </Container>        
    );
}

export default CreateCard;