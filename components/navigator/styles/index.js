import Link from 'next/link';
import styled from 'styled-components/macro';

export const Container = styled.div`
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    z-index: 300; */
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    align-items: center;
`;

export const BrandSection = styled.div``;

export const MidSection = styled.div`
    flex: 1;
`;

export const NavSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled.div`
    cursor: pointer;
    margin: 0 20px;
`;

export const NavLink = styled(Link)`

`;

export const NavText = styled.p`
    color: ${ ({ theme, dark }) => dark ? theme.dark : theme.light };
`;

