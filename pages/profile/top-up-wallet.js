import { useState } from 'react';
import {
    Container, Form, HolderSection, InputSection, Wrapper, WalletDisplay
} from '../../styles/profile/top-up-wallet';
import { getSession } from 'next-auth/client';
import { Image, Button, Input } from '../../UI';
import { updateWallet } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import WalletHolder from '../../components/wallet-holder';

const TopUpWalletPage = ({ session }) => {
    const dispatch = useDispatch();
    const currentUser = session.currentUser;

    const [pin, setPin] = useState('');
    const [amount, setAmount] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const verticalGap = 10;
    const size = 120;

    const updateWalletHandler = async (e) => {
        e.preventDefault();

        if (pin && amount && amount > 0) {
            if (amount > 1000) {
                message.warning('Top up amount should be at-most Rs.1000');
                return;
            }

            setIsLoading(true);
            try {
                await dispatch(updateWallet(session.jwt, {
                    amount: +amount,
                    pin,
                    withdraw: false,
                }));
                setIsLoading(false);
                setPin('');
                setAmount(null);
                message.success('Wallet top-up successful!');
            } catch (err) {
                setIsLoading(false);
                message.error(errConfig(err, 'Wallet top-up failed!'));
            }
        }  
    }
    
    return (
        <Container>
            <Wrapper>
                <Form onSubmit={updateWalletHandler}>
                    <HolderSection>
                        <WalletHolder />
                    </HolderSection>
                    <div style={{ height: verticalGap + 10 }} />
                    <WalletDisplay size={size}>
                        <Image
                            src={'/illustrations/profile/wallet-top-up.svg'}
                            alt={'profile'}
                            height={size}
                            width={size}
                            objectFit="contain"
                        />
                    </WalletDisplay>
                    <div style={{ height: verticalGap + 10 }} />
                    <InputSection>
                        <Input
                            value={amount}
                            setValue={setAmount}
                            type='number'
                            placeholder={"Top up Amount"}
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
                    </InputSection>
                    <div style={{ height: verticalGap + 10 }} />
                    <Button
                        htmlType='submit'
                        block
                        size='large'
                        loading={isLoading}
                    >
                        Top Up Wallet
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

export default TopUpWalletPage;