import { useState, useEffect } from "react";
import { useSession } from 'next-auth/client';
import { errConfig } from '../../utility/error-config';
import {
    Container, Display, Footer, Form, Photo, Section, UploadText, Wrapper
} from './styles';
import { Modal, Input, Button } from '../../UI';
import { useDispatch } from 'react-redux';
import { Select, message } from 'antd';
import { mediaUrl } from "../../utility/media-url";

const { Option } = Select;

const GalleryModal = ({ parent, action, showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();

    const [file, setFile] = useState();
    const [modalUrl, setModalUrl] = useState('');
    const [modalType, setModalType] = useState('image');
    const [modalCaption, setModalCaption] = useState('');

    const [uploading, setUploading] = useState(false);

    const handleSave = async () => {
        if (!loading && session) {
            setUploading(true);
    
            const formData = new FormData();
            formData.append('type', modalType);
            formData.append('url', modalUrl);
            formData.append('image', file);
            formData.append('parent', parent);
            formData.append('caption', modalCaption);
    
            try {
                await dispatch(action(session.jwt, formData));
                handleCancel();
                setUploading(false);
            } catch (err) {
                setUploading(false);
                message.error(errConfig(err, 'Error sending uploaded gallery to server!'));
            }
        }
    }

    const handleCancel = () => {
        setFile(null);
        setModalType('image');
        setModalUrl('');
        setModalCaption('');
        setShowModal(false);
    }

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);

        if (!file) {
            return;
        }

        setFile(file);
        setModalUrl(fileUrl);
    }

    return (
        <Modal
            title="Upload File"
            visible={showModal}
            okText={'Save'}
            cancelText={'Cancel'}
            onOk={handleSave}
            onCancel={handleCancel}
        >
            <Container>
                <Wrapper>
                    <Section>
                        <Display>
                            {
                                modalUrl && modalUrl.trim().length > 0 &&
                                <Photo src={mediaUrl(modalUrl, true)} alt={'modal image'} />
                            }
                        </Display>
                    </Section>
                    <Section>
                        <Form>
                            <Input value={modalUrl} setValue={setModalUrl} placeholder="Media URL" />
                            <div style={{ height: 10 }} />
                            <label>
                                <input type="file" onChange={handleUpload} aria-hidden="true" id="uploadInput" hidden />
                                <UploadText htmlFor="uploadInput">Upload</UploadText>
                            </label>
                            <div style={{ height: 30 }} />
                            <Select defaultValue={'image'} value={modalType} onChange={setModalType}>
                                <Option value="image">Image</Option>
                                <Option value="video">Video</Option>
                            </Select>
                            <div style={{ height: 10 }} />
                            <Input value={modalCaption} setValue={setModalCaption} placeholder="Caption" type="text-area" row={5} />
                        </Form>
                    </Section>
                </Wrapper>
            </Container>
        </Modal>
    );
}

export default GalleryModal;