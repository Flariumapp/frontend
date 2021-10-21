import { Container, HolderContainer, HolderDisplay, HolderEmail, HolderInfo, HolderName } from './styles';
import { Text, Image } from '../../UI';
import { useSession } from 'next-auth/client';
import theme from '../../styles/theme';
import { profileList } from '../../utility/profile-list';

const WalletHolder = () => {
    const [session, loading] = useSession();

    if (loading || !session || !session.currentUser) {
        return null;
    }

    const currentUser = session.currentUser;

    const size = 60;

    return (
        <Container>
            <Text color={theme.darkish} style={{ marginLeft: 5 }}>Wallet Holder</Text>
            <div style={{ height: 10 }} />
            <HolderContainer>
                <HolderDisplay size={size}>
                    <Image
                        src={profileList[currentUser.imageIndex].image}
                        alt={currentUser.firstName}
                        height={size}
                        width={size}
                    />
                </HolderDisplay>
                <HolderInfo>
                    <HolderName>
                        {currentUser.firstName + ' ' + currentUser.lastName}
                    </HolderName>
                    <HolderEmail>
                        {currentUser.email}
                    </HolderEmail>
                </HolderInfo>
            </HolderContainer>
        </Container>
    );
}

export default WalletHolder;