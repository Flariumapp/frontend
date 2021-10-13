import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 190px;
    height: 240px;
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
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    padding: 20px;
`;
    
export const Display = styled.div`
    align-items: center;
    height: 50%;
    margin-top: 10%;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #434343;
`;