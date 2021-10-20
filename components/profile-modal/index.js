import { Modal, Image } from '../../UI';
import { profileList } from '../../utility/profile-list';
import { Container, Grid, Item } from './styles';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../store/actions';
import { useEffect, useState } from 'react';
import { useSession, getSession } from 'next-auth/client';
import { notification } from 'antd';

const ProfileModal = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();

    const [index, setIndex] = useState(session ? session.currentUser.imageIndex : -1);

    useEffect(() => {
        if (session) {
            setIndex(session.currentUser.imageIndex);
        }
    }, [session]);

    const chooseHandler = async () => {
        await dispatch(updateUserProfile(session.jwt, index));
        setShowModal(false);

        notification.info({
            message: 'Your profile update will take few seconds to take effect.',
        });
    }

    const cancelHandler = () => {
        setShowModal(false);
    }

    const size = 150;

    return (
        <Modal
            title="Choose profile image"
            visible={showModal}
            onOk={chooseHandler}
            onCancel={cancelHandler}
            width={size * 5}
        >
            <Container size={size * 5}>
                <Grid>
                    {
                        profileList.map((profile, i) =>
                            <Item key={profile.id} size={size} onClick={() => setIndex(i)} active={i === index}>
                                <Image src={profile.image} alt={'profile'} width={size} height={size} />
                            </Item>
                        )
                    }
                </Grid>
            </Container>
        </Modal>
    );
}

export default ProfileModal;