import { Modal as Mdl } from 'antd';

const Modal = ({ children, title, visible, onOk, onCancel }) => {
    return (
        <Mdl
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
        >
            {children}
        </Mdl>
    );
}

export default Modal;