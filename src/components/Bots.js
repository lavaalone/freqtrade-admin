import { Table} from 'antd';

const Bots = ({columns, data}) => {
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default Bots
