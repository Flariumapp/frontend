import { BrandSection, Container, Wrapper, MidSection, NavItem, NavLink, NavSection, NavText } from './styles';
import Brand from '../brand';
import { useSession } from 'next-auth/client';
import ProfileCircle from '../profile-circle';

const Navigator = ({ dark, currentUser }) => {
    const [session, loading] = useSession();

    const isAuthenticated = session || loading;

    const isAdmin = session && session.currentUser && session.currentUser.isAdmin;

    const adminNavs = [
        {
            id: 'check-flights',
            name: 'Check Flights',
            path: '/flights',
        },
        {
            id: 'shops-and-utilities',
            name: 'Shops & Utilities',
            path: '/shop',
        },
        {
            id: 'food-and-resturants',
            name: 'Food & Resturants',
            path: '/resturant',
        },
        {
            id: 'avialable-banks',
            name: 'Available Banks',
            path: '/bank',
        },
        {
            id: 'currency-conversion',
            name: 'Currency Conversion',
            path: '/currency',
        },
        {
            id: 'create',
            name: 'Create',
            path: '/create',
        },
        {
            id: 'logout',
            name: 'Logout',
            path: '/logout',
        },
    ];


    const authNavs = [
        {
            id: 'check-flights',
            name: 'Check Flights',
            path: '/flights',
        },
        {
            id: 'shops-and-utilities',
            name: 'Shops & Utilities',
            path: '/shop',
        },
        {
            id: 'food-and-resturants',
            name: 'Food & Resturants',
            path: '/resturant',
        },
        {
            id: 'avialable-banks',
            name: 'Available Banks',
            path: '/bank',
        },
        {
            id: 'currency-conversion',
            name: 'Currency Conversion',
            path: '/currency',
        },
        {
            id: 'logout',
            name: 'Logout',
            path: '/logout',
        },
    ];

    const guestNavs = [
        {
            id: 'check-flights',
            name: 'Check Flights',
            path: '/flights',
        },
        {
            id: 'avialable-banks',
            name: 'Available Banks',
            path: '/bank',
        },
        {
            id: 'currency-conversion',
            name: 'Currency Conversion',
            path: '/currency',
        },
        {
            id: 'login',
            name: 'Login',
            path: '/auth',
        },
        {
            id: 'signup',
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
                    {isAuthenticated && <NavItem key="profile">
                        <NavLink href={'/profile'}>
                            <a>
                                <ProfileCircle size={35} bordered />
                            </a>
                        </NavLink>
                    </NavItem>}
                </NavSection>
            </Wrapper>
        </Container>
    );
}

export default Navigator;