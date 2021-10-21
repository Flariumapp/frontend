import { Container } from './styles';
import { Image } from '../../UI';
import { useSession } from 'next-auth/client';
import { profileList } from '../../utility/profile-list';

const ProfileCircle = ({ size = 70, overlay = false, bordered = false, onPress }) => {
    const [session, loading] = useSession();

    let url;

    if (session && session.currentUser) {
        const index = session.currentUser.imageIndex;
        url = profileList[index].image;
    }

    if (loading || !session || !session.currentUser) {
        return <Container size={size} bordered={bordered} onClick={onPress} />
    }

    return (
        <Container size={size} bordered={bordered} onClick={onPress} overlay={overlay}>
            <Image src={url} alt="profile-circle" height={size} width={size} />
        </Container>
    );
}

export default ProfileCircle;