import { useRouter } from 'next/router';
import Navigator from '../../components/navigator';
import Footer from '../../components/footer';
import { Container, Main } from './styles';
import Background from '../../components/background';

const Layout = ({ children }) => {
    const router = useRouter();

    if (router.pathname === '/auth') {
        return (
            <Container>
                <Background img={'/images/backgrounds/airport-flat.jpg'}>
                    <Main>
                        {children}
                    </Main>
                </Background>
            </Container>
        );
    }

    if (router.pathname === '/' || router.pathname === '/guest') {
        return (
            <Container>
                <Background img={'/images/backgrounds/PlaneHack.png'}>
                    <Navigator />
                    <Main>
                        {children}
                    </Main>
                    <Footer />
                </Background>
            </Container>
        );
    }

    return (
        <Container>
            <Navigator dark />
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    );
}

export default Layout;