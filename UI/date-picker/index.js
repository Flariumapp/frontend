import { DatePicker as DtPickr } from 'antd';
import theme from '../../styles/theme';

const DatePicker = ({ id, value, setValue, placeholder, size, glass = false, width }) => {
    const glassStyle = {
        width: width,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        borderRadius: 5,
        border: 'none',
        padding: 24,
        color: theme.darkish,
        textEmphasisColor: theme.darkish,
        textDecorationColor: theme.darkish,
    };

    return (
        <DtPickr
            id={id}
            value={value}
            showTime
            onOk={setValue}
            onChange={(v, s) => setValue(v)}
            placeholder={placeholder}
            size={size}
            style={glass ? glassStyle : { width: '100%' }}
        />
    );
}

export default DatePicker;