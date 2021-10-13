import { Alert as Alrt } from 'antd';

const Alert = ({ message, type, showIcon = false, closable = false }) => {
    return (
        <Alrt
            message={message}
            type={type}
            showIcon={showIcon}
            closable={closable}
        />
    );
}

export default Alert;