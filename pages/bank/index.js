import { Container, Wrapper } from './styles';
import { getSession } from 'next-auth/client';
import buildClient from '../api/build-client';
import GridList from '../../components/grid-list';
import { Text, Empty } from '../../UI';
import theme from '../../styles/theme';

const BankPage = ({ session, banks }) => {
    const list = banks.map(bank => ({
        id: bank.id,
        gallery: bank.logo,
        title: bank.name,
    }));

    return (
        <Container>
            <Wrapper>
                <Text type='legend' color={theme.darkish}>
                    Avialable Banks and ATMs
                </Text>
                <div style={{ height: 20 }} />
                {banks.length === 0 ?
                <Empty /> :    
                <GridList
                    list={list}
                    size={150}
                />}
            </Wrapper>
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    const client = buildClient(context);

    const response = await client.get('bank');

    const { banks } = response.data;

    return {
        props: {
            session,
            banks
        }
    }
}

export default BankPage;