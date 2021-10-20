import styled from 'styled-components/macro';

export const Container = styled.div`
    cursor: pointer;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    padding: 20px;
    width: 200px;
    height: 250px;
    margin: 20px;
    margin-top: 20px;

    /* &:first-of-type {
        margin-left: 0px;
    } */

    &:hover {
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
`;

export const Display = styled.div`


`;

export const Info = styled.div`
    padding: 10px;
`;