import styled from 'styled-components/macro';

export const Heading = styled.h1`
    cursor: ${ ({ pointer }) => pointer ? 'pointer' : 'default' };
    color: ${ ({ color = '#000' }) => color };
    font-size: ${ ({ size = 35 }) => size + 'px' };
    margin: 0;
`;

export const Legend = styled.h4`
    cursor: ${ ({ pointer }) => pointer ? 'pointer' : 'default' };
    color: ${ ({ color = '#000' }) => color };
    font-size: ${ ({ size = 28 }) => size + 'px' };
    margin: 0;
`;

export const Paragraph = styled.p`
    cursor: ${ ({ pointer }) => pointer ? 'pointer' : 'default' };
    color: ${ ({ color = '#000' }) => color };
    font-size: ${ ({ size = 18 }) => size + 'px' };
    margin: 0;
`;

export const SuperHeading = styled.h1`
    cursor: ${ ({ pointer }) => pointer ? 'pointer' : 'default' };
    font-size: 50px;
    color: ${ ({ color = '#000' }) => color };
    font-size: ${ ({ size = 50 }) => size + 'px' };
    margin: 0;
    line-height: 70px;
`;