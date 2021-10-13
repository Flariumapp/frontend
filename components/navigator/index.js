import { BrandSection, Container, Wrapper, MidSection, NavItem, NavLink, NavSection, NavText } from './styles';
import Brand from '../brand';

const Navigator = ({ dark }) => {
    const navs = [
        {
            id: 'nav1',
            name: 'Check Flights',
            path: '/flights',
        },
        {
            id: 'nav2',
            name: 'Shops & Utilities',
            path: '/shops',
        },
        {
            id: 'nav3',
            name: 'Food & Resturants',
            path: '/food',
        },
        {
            id: 'nav4',
            name: 'Help Center',
            path: '/help',
        },
    ];

    return (
        <Container>
            <Wrapper>
                <BrandSection>
                    <Brand dark={dark} />
                </BrandSection>
                <MidSection />
                <NavSection>
                    {
                        navs.map(nav => (
                            <NavItem key={nav.id}>
                                <NavLink href={nav.path}>
                                    <NavText dark={dark}>
                                        {nav.name}
                                    </NavText>
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </NavSection>
            </Wrapper>
        </Container>
    );
}

export default Navigator;