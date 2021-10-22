import { useState } from 'react';
import { Text, Button } from '../../UI';
import { Container, Row, Column } from './styles';
import theme from '../../styles/theme';
import WalletPinModal from '../wallet-pin-modal';

const OrderCalc = ({ list = [], order }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const count = list.length;
    let price = 0;
    let quantity = 0;

    for (const key in list) {
        quantity += list[key].quantity;
        price += list[key].product.price * list[key].quantity;
    }

    const gstRate = 0.1;
    const gstApplied = gstRate * price;

    const shipmentRate = 0.05;
    const shipmentCharge = shipmentRate * price;

    const total = price + gstApplied + shipmentCharge;

    const orderDetails = [
        {
            id: 'od1',
            title: 'Total Items',
            value: count,
        },
        {
            id: 'od2',
            title: 'Total Quantity',
            value: quantity,
        },
        {
            id: 'od3',
            title: 'Price',
            value: price,
        },
        {
            id: 'od4',
            title: 'GST Rate',
            value: gstRate,
        },
        {
            id: 'od5',
            title: 'GST Applied',
            value: gstApplied,
        },
        {
            id: 'od6',
            title: 'Shipment Rate',
            value: shipmentRate,
        },
        {
            id: 'od7',
            title: 'Shipment Charge',
            value: shipmentCharge,
        },
        {
            id: 'od8',
            title: 'Total Price',
            value: total,
        }
    ];

    const orderHandler = async (pin) => {
        setIsLoading(true);
        await order(total, pin);
        setIsLoading(false);
    }

    const openWalletModal = () => {
        setShowModal(true);
    }

    return (
        <Container>
            {
                orderDetails.map(({ id, title, value }) => (
                    <Row key={id}>
                        <Column textAlign='start'>
                            <Text style={{ fontSize: 15 }}>{title}</Text>
                        </Column>
                        <Column>
                            <Text style={{ fontSize: 15 }}>=</Text>
                        </Column>
                        <Column textAlign='end'>
                            <Text color={theme.primary} style={{ fontSize: 15 }}>{value}</Text>
                        </Column>
                    </Row>
                ))
            }
            <div style={{ flex: 1 }} />
            <Button block size="large" loading={isLoading} onPress={openWalletModal}>Order</Button>
            <WalletPinModal
                showModal={showModal}
                setShowModal={setShowModal}
                submit={orderHandler}
            />
        </Container>
    );
}

export default OrderCalc;