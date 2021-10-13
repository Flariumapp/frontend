import { Table as Tbl } from 'antd';

const Table = ({ columns, dataSource,  }) => {
    return (
        <Tbl columns={columns} dataSource={dataSource} />
    );
}

export default Table;