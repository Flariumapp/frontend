import { DatePicker as DtPickr } from 'antd';

const DatePicker = ({ value, setValue, placeholder, size  }) => {
    return (
        <DtPickr
            value={value}
            showTime
            onOk={setValue}
            onChange={(v, s) => setValue(v)}
            placeholder={placeholder}
            size={size}
            style={{ width: '100%' }}
        />
    );
}

export default DatePicker;