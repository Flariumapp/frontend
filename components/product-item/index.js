import { useEffect, useState } from 'react';
import { Container, Display, Info, Name, Price, Row } from './styles';
import { Image, Button } from '../../UI';
import { galleryUrl } from '../../utility/media-url';
import VegBox from '../veg-box';
import { useSelector } from 'react-redux';

const ProductItem = ({ item, size = 220, addItem, deleteItem }) => {
    const { id, name, category, subCategory, price, gallery, meta } = item;

    const carts = useSelector(state => state.crt.carts);

    const [carted, setCarted] = useState(carts.find(cartItem => cartItem.product.id === id));

    useEffect(() => {
        setCarted(carts.find(cartItem => cartItem.product.id === id));
    }, [carts]);

    const cartClickHandler = async () => {
        if (carted) {
            await deleteItem(carted.id);
        } else {
            await addItem(item);
        }
    }

    return (
        <Container size={size}>
            <Display size={size}>
                <Image
                    src={galleryUrl(gallery[0])}
                    alt={name}
                    height={size}
                    width={size}
                />
            </Display>
            <Info>
                <Row>
                    <Name>{name}</Name>
                    <div style={{ flex: 1 }} />
                    {category === 'food' && <VegBox veg={meta.veg} size={20} />}
                </Row>
                <div style={{ height: 10 }} />
                <Price>Rs {price} {category === 'food' && "/ plate"}</Price>
                <div style={{ height: 10 }} />
                <Button onPress={cartClickHandler} block danger={carted}>
                    {carted ? 'Cancel' : 'Add To Cart'}
                </Button>
            </Info>
        </Container>
    );
}

export default ProductItem;