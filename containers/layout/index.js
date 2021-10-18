import { useRouter } from 'next/router';
import Navigator from '../../components/navigator';
import Footer from '../../components/footer';
import { Container, Main } from './styles';
import Background from '../../components/background';
import { backgroundList } from '../../utility/background-list';

const Layout = ({ children }) => {
    const router = useRouter();

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (router.pathname === '/auth') {
        const length = backgroundList['auth'].length;
        const index = randomNum(0, length - 1);
        const { image, dark } = backgroundList['auth'][index];

        return (
            <Container>
                <Background img={image}>
                    <Main>
                        {children}
                    </Main>
                </Background>
            </Container>
        );
    }

    if (router.pathname === '/' || router.pathname === '/guest') {
        const length = backgroundList['home'].length;
        const index = randomNum(0, length - 1);
        const { image, dark } = backgroundList['home'][index];

        return (
            <Container>
                <Background img={image}>
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