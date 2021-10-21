import axios from '../../axios-config';
import { Container, Wrapper, Form, WalletAmount, WalletAmountContainer, WalletInfo, WalletDisplay, WalletContainer, WalletLabel } from '../../styles/profile/check-wallet-balance';
import WalletHolder from '../../components/wallet-holder';
import { Input, Button, Image } from '../../UI';
import { useState } from 'react';
import { header } from '../../utility/header';
import { useSession } from 'next-auth/client';

const CheckWalletBalancePage = () => {
    const [session, loading] = useSession();
    const [pin, setPin] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [wallet, setWallet] = useState();

    const getWallet = async (e) => {
        e.preventDefault();

        if (session && pin.length > 0) {
            setIsLoading(true);
            const response = await axios.post('my-wallet', { pin }, header(session.jwt));
            const { wallet } = response.data;
            setWallet(wallet);
            setIsLoading(false);
        }
    }

    const verticalGap = 20;
    const size = 120;

    return (
        <Container>
            <Wrapper>
                {
                    wallet ?
                    <WalletContainer>
                            <WalletHolder />
                            <div style={{ height: verticalGap + 10 }} />
                            <WalletDisplay size={size}>
                                <Image
                                    src={'/illustrations/profile/check-wallet-balance.svg'}
                                    alt={'profile'}
                                    height={size}
                                    width={size}
                                />
                            </WalletDisplay>
                            <div style={{ height: verticalGap }} />
                            <WalletInfo>
                                <WalletLabel>
                                    Wallet Balance
                                </WalletLabel>
                                <WalletAmountContainer>
                                    <WalletAmount>
                                        {wallet.amount}
                                    </WalletAmount>
                                </WalletAmountContainer>
                            </WalletInfo>
                    </WalletContainer>
                        :
                    <Form onSubmit={getWallet}>
                        <WalletHolder />
                        <div style={{ height: verticalGap + 10 }} />
                        <Input
                            value={pin}
                            setValue={setPin}
                            placeholder="Enter wallet pin"
                            size='large'
                        />
                        <div style={{ height: verticalGap }} />
                        <Button
                            htmlType='submit'
                            block
                            size='large'
                            loading={isLoading}
                        >
                            Check Balance
                        </Button>
                    </Form>
                }
            </Wrapper>
        </Container>
    );
}

export default CheckWalletBalancePage;