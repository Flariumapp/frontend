import { Container, HistoryList } from '../../styles/profile/history';
import { Text } from '../../UI';
import { getSession } from 'next-auth/client';
import buildClient from '../api/build-client';
import headerConfig from '../api/header-config';
import HistoryCard from '../../components/history-card';
import theme from '../../styles/theme';

const HistoryPage = ({ history }) => {
    return (
        <Container>
            <HistoryList>
                <Text color={theme.darkish} type='legend' style={{ marginLeft: 10 }}>Wallet History</Text>
                <div style={{ height: 20 }} />
                {
                    history.map(h => <HistoryCard key={h.id} history={h} />)
                }
            </HistoryList>
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
        };
    }

    const client = buildClient(context);

    const response = await client.get('history', headerConfig(session.jwt));

    const { history } = response.data;

    return {
        props: {
            session,
            history,
        }
    }
}

export default HistoryPage;