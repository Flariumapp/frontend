import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    position: relative;
    border-radius: 5px;
    border: 0.5px solid #ccc;
    margin: 0 5px;
`;

export const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
`;

export const Cut = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
`;

export const Photo = styled(Image)`
    border-radius: 10px;
    object-fit: cover;
`;