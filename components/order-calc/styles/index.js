import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 200px;
    justify-content: center;
    padding: 20px;
    background-color: ${ ({ theme }) => theme.light };
    margin-right: 10px;
    /* box-shadow: 0 1px 3px #444; */
    border-radius: 5px;
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
`;