import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import CreateCard from '../../components/create-card';
import { Container } from '../../styles/create';
import { Text } from '../../UI';
import { createType } from '../../utility/create-type';

const CreatePage = ({ session }) => {
    const router = useRouter();

    const goToCreateRoute = (path) => {
        router.push(path);
    }

    return (
        <Container>
            {
                createType.map(c =>
                    <CreateCard
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        path={c.path}
                        illustration={c.illustration}
                        goToCreateRoute={goToCreateRoute}
                    />
                )
            }
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session || !session.currentUser || !session.currentUser.isAdmin) {
        return {
            redirect: {
                destination: '/',
            }
        };
    }

    return {
        props: {
            session,
        }
    }
}

export default CreatePage;