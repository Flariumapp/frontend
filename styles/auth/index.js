import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Display = styled.div`
    width: 50%;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    padding: 80px;
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