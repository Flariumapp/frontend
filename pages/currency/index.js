import { useState } from 'react';
import { Container, Wrapper, InputSection, ResultSection, InputContainer } from '../../styles/currency';
import { Text, Input, Button, Select } from '../../UI';
import { currencyList } from '../../utility/currency-list';

const CurrencyPage = () => {
    const [yourCurrency, setYourCurrency] = useState();
    const [convertedCurrency, setConvertedCurrency] = useState();
    const [amount, setAmount] = useState();

    const [convertedAmount, setConvertedAmount] = useState();
    const [rate, setRate] = useState();
    const [tax, setTax] = useState();
    const [totalAmount, setTotalAmount] = useState();

    const convertCurrenyHandler = () => {

    }

    return (
        <Container>
            <Wrapper>
                <InputSection>
                    <Text type='legend'>Currency and Exchange</Text>
                    <div style={{ height: 20 }} />
                    <Select
                        placeholder="Your Currency"
                        value={yourCurrency}
                        setValue={setYourCurrency}
                        size="large"
                        list={currencyList}
                    />
                    <div style={{ height: 20 }} />
                    <Select
                        placeholder="Converted Currency"
                        value={convertedCurrency}
                        setValue={setConvertedCurrency}
                        size="large"
                        list={currencyList}
                    />
                    <div style={{ height: 20 }} />
                    <Input
                        value={amount}
                        setValue={setAmount}
                        size="large"
                        type='number'
                        placeholder="Amount"
                    />
                    <div style={{ height: 20 }} />
                    <Button onPress={convertCurrenyHandler} size="large" block>
                        Convert
                    </Button>
                </InputSection>
                <div style={{ width: 40 }} />
                <InputSection>
                    <div style={{ height: 60 }} />
                    <Text style={{ whiteSpace: 'nowrap' }}>Amount in converted currency = </Text>
                    <div style={{ height: 35 }} />
                    <Text style={{ whiteSpace: 'nowrap' }}>Conversion Rate = </Text>
                    <div style={{ height: 35 }} />
                    <Text style={{ whiteSpace: 'nowrap' }}>Tax applied = </Text>
                    <div style={{ height: 35 }} />
                    <Text style={{ whiteSpace: 'nowrap' }}> Net amount received = </Text>
                </InputSection>
                <ResultSection>
                    <div style={{ height: 60 }} />
                    <InputContainer>
                        <Input value={convertedAmount} size="large" type='number'  />
                    </InputContainer>
                    <div style={{ height: 20 }} />
                    <InputContainer>
                        <Input value={rate} size="large" type='number'  />
                    </InputContainer>
                    <div style={{ height: 20 }} />
                    <InputContainer>
                        <Input value={tax} size="large" type='number'  />
                    </InputContainer>
                    <div style={{ height: 20 }} />
                    <InputContainer>
                        <Input value={totalAmount} size="large" type='number'  />
                    </InputContainer>
                </ResultSection>
            </Wrapper>
        </Container>
    );
}

export default CurrencyPage;