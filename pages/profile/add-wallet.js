import { useState } from 'react';
import {
    Container, Form, HolderSection, InputSection, Wrapper
} from '../../styles/profile/add-wallet';
import { getSession } from 'next-auth/client';
import { Image, Button, Input, Text } from '../../UI';
import { profileList } from '../../utility/profile-list';
import { addWallet } from '../../store/actions';
import { useDispatch } from 'react-redux';
import theme from '../../styles/theme';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import WalletHolder from '../../components/wallet-holder';

const AddWalletPage = ({ session }) => {
    const dispatch = useDispatch();
    const currentUser = session.currentUser;

    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [amount, setAmount] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const verticalGap = 10;

    const addWalletHandler = async (e) => {
        e.preventDefault();

        if (amount && amount > 1000) {
            message.warning('Added amount should not be more than Rs.1000');
            return;
        }

        if (pin && confirmPin && pin === confirmPin) {
            setIsLoading(true);
            try {
                await dispatch(addWallet(session.jwt, {
                    amount: +amount,
                    pin,
                }));
                setIsLoading(false);
                setPin('');
                setConfirmPin('');
                setAmount(null);
                message.success('Wallet added successfully!');
            } catch (err) {
                setIsLoading(false);
                message.error(errConfig(err, 'Wallet cannot be created at moment!'));
            }
        }  
    }
    
    return (
        <Container>
            <Wrapper>
                <Form onSubmit={addWalletHandler}>
                    <HolderSection>
                        <WalletHolder />
                    </HolderSection>
                    <div style={{ height: verticalGap + 10 }} />
                    <InputSection>
                        <Input
                            value={amount}
                            setValue={setAmount}
                            type='number'
                            placeholder={"Initial Amount"}
                            size='large'
                        />
                        <div style={{ height: verticalGap }} />
                        <Input
                            value={pin}
                            setValue={setPin}
                            placeholder={"Pin"}
                            size='large'
                            type='text'
                            maxLength={4}
                        />
                        <div style={{ height: verticalGap }} />
                        <Input
                            value={confirmPin}
                            setValue={setConfirmPin}
                            placeholder={"Confirm Pin"}
                            size='large'
                            type='text'
                            maxLength={4}
                        />
                    </InputSection>
                    <div style={{ height: verticalGap + 10 }} />
                    <Button
                        htmlType='submit'
                        block
                        size='large'
                        loading={isLoading}
                    >
                        Create Wallet
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });
    
    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}

export default AddWalletPage;