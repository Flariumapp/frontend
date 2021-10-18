import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 60px;
`;

export const BodyContainer = styled.div`
    flex: 1;
`;

export const MethodContainer = styled.div`
    height: 150px;
`;

export const MethodText = styled.p`
    margin: 0;
    font-size: 16px;
    color: ${ ({ theme }) => theme.light };
`;

export const MethodList = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Section = styled.div`
    width: 50%;
`;

export const Form = styled.form``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
    width: 100%;
`;

export const InputSubContainer = styled.div`
    flex: 1;
`;

export const Switch = styled.div`
    display: flex;
    padding: 20px 0px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;