import { DatePicker as DtPickr } from 'antd';

const DatePicker = ({ value, setValue, placeholder, size  }) => {
    return (
        <DtPickr
            showTime
            onOk={setValue}
            placeholder={placeholder}
            size={size}
        />
    );
}

export default DatePicker;