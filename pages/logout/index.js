import { useRouter } from 'next/router';
import { Container, Wrapper, ButtonSection } from '../../styles/logout';
import { Text, Button } from '../../UI';
import { signOut } from 'next-auth/client';

const LogoutPage = () => {
    const router = useRouter();

    const logout = async () => {
        await signOut({ redirect: false });
        router.replace('/guest');
    }

    const cancel = () => {
        router.replace('/');
    }

    return (
        <Container>
            <Wrapper>
                <Text>Are you sure you want to logout?</Text>
                <div style={{ height: 20 }} />
                <ButtonSection>
                    <Button onPress={logout}>Yes</Button>
                    <div style={{ width: 10 }} />
                    <Button onPress={cancel}>No</Button>
                </ButtonSection>
            </Wrapper>
       </Container> 
    );
}

export default LogoutPage;