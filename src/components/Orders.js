import { Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const Orders = ({data}) => {
    const { Text } = Typography;

    // const executeCommand = async (order, action) => {
    //     const resp = await fetch(`http://localhost:5000/orders?action=${action}&order_id=${order.id}`)
    //     const data = await resp.json()
    //     console.log(data)
    //     return data
    //   }

    return (
        <>
            <Row>
            {data.map((order) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={order.o_currency.replace("_", "/") + " (" + order.o_type + ")"} style={{ width: 300 }}>
                            <p><Text strong>Rate (USD)</Text>: {order.o_limitPrice.toString().substring(0,6) + " / " + order.o_lastPrice.toString().substring(0,6)}</p>
                            <p><Text strong>Total (USD)</Text>: {order.o_expectedTotal.toString().substring(0,6) + " / " + order.o_currentTotal.toString().substring(0,6)}</p>
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Orders
