import styled from 'styled-components/macro';

export const Container = styled.div`
    margin: 20px 0px;
    border-radius: 10px;
    border: ${ ({ glass }) => glass ? 'none' : '0.2px solid #ccc' };
    overflow: hidden;
`;

export const GlassContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    padding: 20px 40px;
    justify-content: space-between;
`;

export const Section = styled.div`

`;

export const Display = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 0.5px solid #ccc;
    overflow: hidden;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Airport = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    text-transform: capitalize;
`;

export const Text = styled.p`
    text-transform: capitalize;
    font-size: 16px;
    margin: 0;
`;

export const Status = styled.p`
    color: ${({ color }) => color };
    font-size: 16px;
    margin: 0;
    text-transform: capitalize;
`;