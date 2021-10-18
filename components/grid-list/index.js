import GridItem from '../grid-item';
import { Container } from './styles';

const GridList = ({ list = [], size = 70 }) => {
    return (
        <Container>
            {
                list.map(item => <GridItem
                    id={item.id}
                    key={item.id}
                    gallery={item.gallery}
                    title={item.title}
                    showTitle={false}
                    size={size}
                />)
            }
        </Container>
    );
}

export default GridList;