import { Space } from 'antd';
import { Row, Col, Card,Typography, Button } from 'antd';
import { Popconfirm, message } from 'antd';

const Orders = ({data, apiEndpoint}) => {
    const { Text } = Typography;

    const cancelOrder = async (order) => {
        message.success('Click on Yes');
        const resp = await fetch(`${apiEndpoint}/order/cancel?exchange=${order.o_exchange}&orderID=${order.o_id}`)
    }

    const fastSell = async (order) => {
        message.success('Click on Yes');
        const resp = await fetch(`${apiEndpoint}/order/fast-sell?exchange=${order.o_exchange}&orderID=${order.o_id}`)
    }

    const cancel = () => {
        message.error('Click on No');
    }

    return (
        <>
            <Row>
            {data.map((order) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={order.o_currency.replace("_", "/") + " (" + order.o_type + ")"} style={{ width: 300 }}>
                            <p><Text strong>ID</Text>: {order.o_id}</p>
                            <p><Text strong>Exchange</Text>: {order.o_exchange}</p>
                            <p><Text strong>Open at</Text>: {order.o_openTime}</p>
                            <p><Text strong>Rate (USD)</Text>: {order.o_limitPrice.toString().substring(0,6) + " / " + order.o_lastPrice.toString().substring(0,6)}</p>
                            <p><Text strong>Total (USD)</Text>: {order.o_expectedTotal.toString().substring(0,6) + " / " + order.o_currentTotal.toString().substring(0,6)}</p>
                            <p>
                                <Space>
                                    <Popconfirm
                                        title="Are you sure to cancel this order?"
                                        onConfirm={() => cancelOrder(order)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Cancel Order</Button>
                                    </Popconfirm>

                                    <Popconfirm
                                        title="Are you sure to fast sell this order?"
                                        onConfirm={() => fastSell(order)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Fast Sell</Button>
                                    </Popconfirm>
                                </Space>
                            </p>
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Orders
