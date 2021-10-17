import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { Image, Input, Button, Select } from '../../UI';
import { Container, Wrapper, Section, Display, Form, FormContainer, List } from '../../styles/create/location';
import MenuList from '../../components/menu-list';
import GalleryModal from '../../components/gallery-modal';
import { useSelector, useDispatch } from 'react-redux';
import { addLocationGallery, addLocation, removeLocationGallery, resetLocationGallery } from '../../store/actions';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import { countryList } from '../../utility/country-list';
import { galleryUrl, mediaUrl } from "../../utility/media-url";

const CreateLocationPage = ({ session }) => {
    const dispatch = useDispatch();

    const locationGallery = useSelector(state => state.loc.gallery);

    const [display, setDisplay] = useState();
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [ids, setIds] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (locationGallery.length > 0) {
            setIds(locationGallery.map(lg => lg.id));
            setDisplay(locationGallery[locationGallery.length - 1]);
        } else {
            setDisplay();
        }
    }, [locationGallery]);

    const addGalleryHandler = () => {
        setShowModal(true);
    }

    const resetLocationHandler = () => {
        setName('');
        setCountry('');
        setDescription('');
        setIds('');
    }

    const addLocationHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            await dispatch(addLocation(session.jwt, {
                name, country, gallery: ids, description,
            }));
            dispatch(resetLocationGallery());
            resetLocationHandler();
            setIsLoading(false);
            message.success({
                content: 'Location submitted successfully',
            });
        } catch (err) {
            setIsLoading(false);
            message.error({
                content: errConfig(err, 'Error submitting location!')
            });
        }
    }   

    return (
        <Container>
            <Wrapper>
                <Section>
                    <Display>
                        { display && <Image src={galleryUrl(display)} alt={display.caption} height={300} width={300} /> }
                    </Display>
                    <div style={{ height: 20 }} />
                    <List>
                        <MenuList
                            list={locationGallery}
                            display={display}
                            addGallery={addGalleryHandler}
                            removeAction={removeLocationGallery}
                            setDisplay={setDisplay}
                        />
                    </List>
                </Section>
                <FormContainer>
                    <Form onSubmit={addLocationHandler}>
                        <Input
                            value={name}
                            setValue={setName}
                            placeholder="Name"
                            size="large"
                        />
                        <div style={{ height: 10 }} />
                        <Select
                            value={country}
                            setValue={setCountry}
                            placeholder="Country"
                            size="large"
                            list={countryList}
                        />
                        <div style={{ height: 10 }} />
                        <Input
                            type="text-area"
                            value={description}
                            setValue={setDescription}
                            placeholder="Description"
                            size="large"
                            rows={6}
                        />
                        <div style={{ height: 10 }} />
                        <Button size="large" htmlType="submit" block loading={isLoading}>Add Location</Button>
                    </Form>
                </FormContainer>
            </Wrapper>
            <GalleryModal
                parent={'location'}
                action={addLocationGallery}
                showModal={showModal}
                setShowModal={setShowModal}
            />
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

export default CreateLocationPage;