import React, { useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import { Input, Button, Table } from '../../UI';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { Container, EntrySection, FlightsTable, Form, InputContainer, ButtonContainer, Display, Logo, Status, LoadingContainer, Loader } from '../../styles/flights';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchFlights } from '../../store';
import { flights } from '../../data/flights';

const FlightsPage = () => {
    // const dispatch = useDispatch();

    // const token = useSelector(state => state.ath.token);
    // const flights = useSelector(state => state.flt.flights);

    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     dispatch(fetchFlights(token))
    //         .then(result => {
    //             setIsLoading(false);
    //         }).catch(err => {
    //             setIsLoading(false);
    //             const errMsg = err.response && err.response.data ? err.response.data.message : 'Flights fetch failed';
    //             message.error({
    //                 content: errMsg,
    //             });
    //         });
    // }, [dispatch, token]);


    const columns = [
        {
            title: 'Flight No.',
            dataIndex: 'id',
            key: 'flightNo',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: ({logo, brand}) => {
                return (
                    <Display>
                        <Logo src={logo} alt={brand} />
                    </Display>
                )
            }
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            key: 'origin',
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Terminal',
            dataIndex: 'terminal',
            key: 'terminal',
        },
        {
            title: 'Gate No.',
            dataIndex: 'gateNo',
            key: 'gateno',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: ({text, color}) => (
                <Status color={color}>
                    {text}
                </Status>
            )
        },
    ];

    if(isLoading) {
        return (
            <LoadingContainer>
                <Loader>
                    <Spin size={20} />
                </Loader>
            </LoadingContainer>
        );
    }
    
    return (
        <Container>
            <EntrySection>
                <Form>
                    <InputContainer>
                        <Input size="large" prefix={<FiMapPin color={"#707070"} />} placeholder="Origin" />
                    </InputContainer>
                    <InputContainer>
                        <Input size="large" prefix={<FiMapPin color={"#707070"} />} placeholder="Destination" />
                    </InputContainer>
                    <InputContainer>
                        <Input size="large" prefix={<FiCalendar color={"#707070"} />} placeholder="Date and Time" />
                    </InputContainer>
                    <ButtonContainer>
                        <Button size="large" type="primary" block>Search avialable flights</Button>
                    </ButtonContainer>
                </Form>
            </EntrySection>
            <FlightsTable>
                <Table columns={columns} dataSource={flights}  />
            </FlightsTable>
        </Container>
    );
}

export default FlightsPage;