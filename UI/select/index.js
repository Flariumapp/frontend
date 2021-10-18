import { Select as Slct } from 'antd';

const { Option } = Slct;

const Select = ({ list = [], placeholder, value, setValue, size }) => {
    return (
        <Slct
            value={value && value.length ? value : null}
            showSearch
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={setValue}
            size={size}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: "100%", margin: 0 }}
            allowClear
        >
            {list.map(item => <Option value={item.name}>{item.name}</Option>)}
        </Slct>
    );
}

export default Select;