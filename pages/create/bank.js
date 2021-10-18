import { getSession } from "next-auth/client";
import { useState, useEffect } from "react";
import { Image, Input, Button } from '../../UI';
import { Container, Wrapper, Display, Info, Fallback, Form } from '../../styles/create/bank';
import GalleryModal from '../../components/gallery-modal';
import { FiPlus } from "react-icons/fi";
import theme from '../../styles/theme';
import { addBankGallery, addBank, resetBankGallery } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import { galleryUrl } from "../../utility/media-url";

const CreateBankPage = ({ session }) => {
    const dispatch = useDispatch();

    const gallery = useSelector(state => state.bnk.gallery);

    const [name, setName] = useState();
    const [display, setDisplay] = useState();

    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const size = 300;

    useEffect(() => {
        if (gallery) {
            setDisplay(gallery);
        } else {
            setDisplay();
        }
    }, [gallery]);

    const resetBankHandler = () => {
        setName('');
    }

    const addBankHandler = async (e) => {
        e.preventDefault();

        if (gallery) {
            setIsLoading(true);
            try {
                await dispatch(addBank(session.jwt, {
                    name, logo: gallery.id,
                }));
                dispatch(resetBankGallery());
                resetBankHandler();
                setIsLoading(false);
                message.success({
                    content: 'Bank submitted successfully',
                });
            } catch (err) {
                setIsLoading(false);
                message.error({
                    content: errConfig(err, 'Error submitting bank info!')
                });
            }
        }
    }  

    return (
        <Container>
            <Wrapper>
                <Form onSubmit={addBankHandler}>
                    <Display>
                        {display ?
                            <Image src={galleryUrl(display)} alt={display.caption} height={300} width={300} objectFit="contain" /> :
                            <Fallback size={size} onClick={() => setShowModal(true)}>
                                <FiPlus
                                    size={20}
                                    color={theme.darkish}
                                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                />
                            </Fallback>
                        }
                    </Display>
                    <div style={{ height: 20 }} />
                    <Info>
                        <Input value={name} setValue={setName} placeholder="Bank name" size="large" />
                        <div style={{ height: 20 }} />
                        <Button htmlType="submit" block size="large" loading={isLoading}>Add Bank</Button>
                    </Info>
                </Form>
            </Wrapper>
            <GalleryModal showModal={showModal} setShowModal={setShowModal} parent="bank" action={addBankGallery}  />
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
            }
        };
    }

    if (!session.currentUser.isAdmin) {
        return {
            redirect: {
                destination: '/',
            }
        };
    }

    return {
        props: {
            session,
        }
    }
}

export default CreateBankPage;