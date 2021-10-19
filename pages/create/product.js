import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { Image, Input, Button, Select, CheckBox } from '../../UI';
import { Container, Wrapper, Section, Display, Form, FormContainer, List } from '../../styles/create/location';
import MenuList from '../../components/menu-list';
import GalleryModal from '../../components/gallery-modal';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, addProductGallery, resetProductGallery, removeProductGallery } from '../../store/actions';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import { countryList } from '../../utility/country-list';
import { galleryUrl } from "../../utility/media-url";
import { productCategoryList, productSubCategoryMapList } from '../../utility/product-category-list';

const CreateProductPage = ({ session }) => {
    const dispatch = useDispatch();

    const productGallery = useSelector(state => state.prd.gallery);

    const [display, setDisplay] = useState();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    const [subCategory, setSubCategory] = useState('');
    const [ids, setIds] = useState([]);

    const [veg, setVeg] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (productGallery.length > 0) {
            setIds(productGallery.map(pg => pg.id));
            setDisplay(productGallery[productGallery.length - 1]);
        } else {
            setDisplay();
        }
    }, [productGallery]);

    const addGalleryHandler = () => {
        setShowModal(true);
    }

    const resetProductHandler = () => {
        setName('');
        setCategory('');
        setPrice(null);
        setSubCategory('');
        setVeg(false);
        setIds([]);
    }

    const addProductHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            let meta = {};
            if (category === 'food') {
                meta.veg = veg;
            }

            await dispatch(addProduct(session.jwt, {
                name, category, price, subCategory, gallery: ids, meta,
            }));
            dispatch(resetProductGallery());
            resetProductHandler();
            setIsLoading(false);
            message.success({
                content: 'Product submitted successfully',
            });
        } catch (err) {
            setIsLoading(false);
            message.error({
                content: errConfig(err, 'Error submitting product!')
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
                            list={productGallery}
                            display={display}
                            addGallery={addGalleryHandler}
                            removeAction={removeProductGallery}
                            setDisplay={setDisplay}
                        />
                    </List>
                </Section>
                <FormContainer>
                    <Form onSubmit={addProductHandler}>
                        <Input
                            value={name}
                            setValue={setName}
                            placeholder="Name"
                            size="large"
                        />
                        <div style={{ height: 20 }} />
                        <Select
                            value={category}
                            setValue={setCategory}
                            placeholder="Category"
                            size="large"
                            list={productCategoryList}
                        />
                        <div style={{ height: 20 }} />
                        <Input
                            value={price}
                            setValue={setPrice}
                            placeholder="Price"
                            size="large"
                            type='number'
                        />
                        <div style={{ height: 20 }} />
                        <Select
                            value={subCategory}
                            setValue={setSubCategory}
                            placeholder="Sub Category"
                            size="large"
                            list={productSubCategoryMapList[category]}
                        />
                        <div style={{ height: 20 }} />
                        {
                            category === 'food' &&
                            <CheckBox
                                setValue={setVeg}
                                disabled={category !== 'food'}
                                value={veg}>
                                Veg
                            </CheckBox>
                        }
                         <div style={{ height: 20 }} />
                        <Button size="large" htmlType="submit" block loading={isLoading}>Add Product</Button>
                    </Form>
                </FormContainer>
            </Wrapper>
            <GalleryModal
                parent={'product'}
                action={addProductGallery}
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

export default CreateProductPage;