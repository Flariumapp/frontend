import { useState } from 'react';
import { Container, Wrapper, Form } from './styles';
import WalletHolder from '../wallet-holder';
import { Input, Button, Modal } from '../../UI';

const WalletPinModal = ({ showModal, setShowModal, submit }) => {
    const [pin, setPin] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = () => {
        submit(pin);
        setShowModal(false);
    }

    const cancelHandler = () => {
        setPin('');
        setIsLoading(false);
        setShowModal(false);
    }


    const verticalGap = 20;
    const size = 120;

    return (
        <Modal
            title="Wallet Payment"
            visible={showModal}
            onOk={submitHandler}
            onCancel={cancelHandler}
        >
            <Container>
                <Wrapper>
                        <WalletHolder />
                        <div style={{ height: verticalGap + 10 }} />
                        <Input
                            value={pin}
                            setValue={setPin}
                            placeholder="Enter wallet pin"
                            size='large'
                        />
                </Wrapper>
            </Container>
        </Modal>
    );
}

export default WalletPinModal;