import ProductItem from '../product-item';
import { Container, HeadingContainer, List } from './styles';
import { Text } from '../../UI';
import theme from '../../styles/theme';

const ProductList = ({ list = [], title, orderList = [], addItem, deleteItem }) => {
    if (list.length === 0) {
        return null;
    }

    return (
        <Container>
            <HeadingContainer>
                <Text type="legend" color={theme.darkish} style={{ textTransform: 'capitalize' }}>{title}</Text>
            </HeadingContainer>
            <List>
                {
                    list.map(item =>
                        <ProductItem
                            key={item.id}
                            item={item}
                            addItem={addItem}
                            deleteItem={deleteItem}
                            orderList={orderList}
                        />
                    )
                }
            </List>
        </Container>
    );
}

export default ProductList;