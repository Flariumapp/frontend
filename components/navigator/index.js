import { BrandSection, Container, Wrapper, MidSection, NavItem, NavLink, NavSection, NavText } from './styles';
import Brand from '../brand';
import { useSession } from 'next-auth/client';

const Navigator = ({ dark, currentUser }) => {
    const [session, loading] = useSession();

    const isAuthenticated = session || loading;

    const isAdmin = session && session.currentUser && session.currentUser.isAdmin;

    const adminNavs = [
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
            path: '/resturant',
        },
        {
            id: 'nav4',
            name: 'Help Center',
            path: '/help',
        },
        {
            id: 'nav5',
            name: 'Create',
            path: '/create',
        },
        {
            id: 'nav6',
            name: 'Logout',
            path: '/logout',
        },
    ];


    const authNavs = [
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
            path: '/resturant',
        },
        {
            id: 'nav4',
            name: 'Help Center',
            path: '/help',
        },
        {
            id: 'nav5',
            name: 'Logout',
            path: '/logout',
        },
    ];

    const guestNavs = [
        {
            id: 'nav1',
            name: 'Check Flights',
            path: '/flights',
        },
        {
            id: 'nav2',
            name: 'Login',
            path: '/auth',
        },
        {
            id: 'nav3',
            name: 'Signup',
            path: '/auth',
        },
    ];

    const navs = isAuthenticated ? isAdmin ? adminNavs : authNavs : guestNavs;

    return (
        <Container>
            <Wrapper>
                <BrandSection>
                    <NavLink href={'/'}>
                        <a><Brand dark={dark} /></a>
                    </NavLink>
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