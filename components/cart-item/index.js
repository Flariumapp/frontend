import { useState } from 'react';
import { Image } from '../../UI';
import {
    Container, Display, Title, Row, ProductSection, Quantity, QuantityContainer, QuantitySection, Cost
} from './styles';
import { IoIosClose } from 'react-icons/io';
import { galleryUrl } from '../../utility/media-url';
import theme from '../../styles/theme';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { Button } from '../../UI';

const CartItem = ({ item, size = 60, updateItem, deleteItem, updateCalc, setUpdateCalc }) => {
    const { id, product, quantity } = item;
    const { name, gallery, subCategory, meta, price } = product;

    const [qty, setQty] = useState(quantity);

    const increaseQty = async () => {
        await updateItem(id, {
            product: product.id,
            quantity: qty + 1,
        });
        setQty(prevState => prevState + 1);
        setUpdateCalc(true);
    }   

    const decreaseQty = async () => {
        if (qty > 1) {
            await updateItem(id, {
                product: product.id,
                quantity: qty - 1,
            });
            setQty(prevState => prevState - 1);
            setUpdateCalc(true);
        } else {
            deleteCartItem();
        }
    }

    const deleteCartItem = async () => {
        await deleteItem(id);
    }

    return (
        <Container>
            <ProductSection>
                <Display size={size}>
                    <Image src={galleryUrl(gallery[0])} alt={name} height={size} width={size} />
                </Display>
                <div style={{ height: 3 }} />
                <Title>{name}</Title>
                <Cost>Rs. {price * qty}</Cost>
            </ProductSection>
            <QuantitySection>
                <Row>
                    <div style={{ flex: 1 }} />
                    <IoIosClose size={20} onClick={deleteCartItem} color={theme.darkish} />
                </Row>
                <Button onPress={increaseQty}>
                    <FiChevronUp color="#fff" />
                </Button>
                <QuantityContainer>
                    <Quantity>
                        {qty}
                    </Quantity>
                </QuantityContainer>
                <Button onPress={decreaseQty}>
                    <FiChevronDown color="#fff" />
                </Button>
            </QuantitySection>
        </Container>    
    );
}

export default CartItem;