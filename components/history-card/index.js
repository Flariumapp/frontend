import { Container, Amount, Column, Mode, Row, Time } from './styles';

const HistoryCard = ({ history: { amount, withdraw, user, createdAt } }) => {
    return (
        <Container>
            <Row>
                <Column>
                    <Amount>
                        {withdraw ? '- ' : '+ '}{amount}
                    </Amount>
                </Column>
                <Column>
                    <Mode withdraw={withdraw}>
                        {withdraw ? 'Withdraw' : 'Deposit'}
                    </Mode>
                </Column>
                <Column>
                    <Time>
                        {new Date(createdAt).toLocaleString('en-US')}
                    </Time>
                </Column>
            </Row>
        </Container>    
    );
}

export default HistoryCard;