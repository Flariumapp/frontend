import { Modal as Mdl } from 'antd';

const Modal = ({ children, title, visible, onOk, onCancel, width }) => {
    return (
        <Mdl
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            width={width}
            bodyStyle={{
                padding: 0
            }}
        >
            {children}
        </Mdl>
    );
}

export default Modal;