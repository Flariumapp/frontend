import styled from 'styled-components/macro';
import Image from 'next/image';

export const Display = styled.div`
    height: 400px;
    width: 100%;
    background-color: ${ ({ theme }) => theme.secondary };
    border-radius: 5px;
    overflow: hidden;
`;

export const Photo = styled(Image)``;