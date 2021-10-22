import { useRouter } from 'next/router';
import { Container, Wrapper } from '../../styles/404';
import { Result } from 'antd';
import { Button } from '../../UI';

const NotFoundPage = () => {
    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    }

    return (
        <Container>
            <Wrapper>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button size='large' onPress={goToHome}>Back To Home</Button>}
                />
            </Wrapper>
        </Container>
    );
}

export default NotFoundPage;