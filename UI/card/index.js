import { Card as Crd } from 'antd';
import { Container } from './styles';
import { Text } from '../';

const { Meta } = Crd;

const Card = ({ hoverable = false, glass, width, src, alt, title, description  }) => {
    if (glass) {
        return (
            <Container>
                <Text type='legend' size={20}>{title}</Text>
                <Text type='paragraph' size={16}>{description}</Text>
            </Container>
        );
    }

    return (
        <Crd
            hoverable={hoverable}
            width={width}
            cover={<img src={src} alt={alt} />}
        >
            <Meta title={title} description={description} />
        </Crd>
    );
}

export default Card;