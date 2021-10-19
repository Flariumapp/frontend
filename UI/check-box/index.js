import { Checkbox as ChBx } from 'antd';

const CheckBox = ({ value, setValue, disabled, children }) => {
    return (
        <ChBx
            onChange={({ target: { checked } }) => setValue(checked)}
            disabled={disabled}
        >
            {children}
        </ChBx>
    );
}

export default CheckBox;