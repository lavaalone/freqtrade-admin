import { Button, Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const Orders = ({data}) => {
    const { Text } = Typography;

    const executeCommand = async (order, action) => {
        const resp = await fetch(`http://localhost:5000/orders?action=${action}&order_id=${order.id}`)
        const data = await resp.json()
        console.log(data)
        return data
      }

    return (
        <>
            <Row>
                {data.map((order) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={order.exchange + " | " + order.pair} style={{ width: 300 }}>
                            <p><Text strong>Id</Text>: {order.id}</p>
                            <p><Text strong>Profit (USD)</Text>: {order.profit_usd}</p>
                            <p><Text strong>Profit (%)</Text>: {order.profit_per}</p>
                            <p><Text strong>Status</Text>: {order.status}</p>
                            <p><Text strong>Time</Text>: {order.time}</p>
                            <p><Text strong>Delete</Text>: <Button type='submit' onClick={() => executeCommand(order, 'delete')}>Delete</Button></p>
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Orders
