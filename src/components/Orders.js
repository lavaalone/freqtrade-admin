import { Space } from 'antd';
import { Row, Col, Card,Typography, Button } from 'antd';
import { Popconfirm, message } from 'antd';

const Orders = ({data, apiEndpoint}) => {
    const { Text } = Typography;

    const cancelOrder = async (order) => {
        const resp = await fetch(`${apiEndpoint}/order/cancel?exchange=${order.o_exchange}&orderID=${order.o_id}`)
        const data = await resp.text()
        message.success(data);
    }

    const fastSell = async (order) => {
        message.success('Click on Yes');
        const resp = await fetch(`${apiEndpoint}/order/fast-sell?exchange=${order.o_exchange}&orderID=${order.o_id}`)
        const data = await resp.text()
        message.success(data);
    }

    const cancel = () => {
        message.error('Click on No');
    }

    const computeTextStyleByProfitPercent = (percent) => {
        const num = Number(percent);
        if (num > 0) {
            return 'success'
        } else if (num <= 0 && num > -5) {
            return 'warning'
        } else {
            return "danger"
        }
    }

    return (
        <>
            <Row>
            {data.map((order) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={order.o_currency.replace("_", "/") + " (" + order.o_type + ")"} style={{ width: 300 }}>
                            <p><Text strong type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>ID</Text><Text  type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>: {order.o_id + " (" + order.o_exchange + ")"}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>Rate (USD)</Text><Text  type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>: {order.o_limitPrice.toString().substring(0,6) + " / " + order.o_lastPrice.toString().substring(0,6)}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>Total (USD)</Text><Text  type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>: {order.o_expectedTotal.toString().substring(0,6) + " / " + order.o_currentTotal.toString().substring(0,6)}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>Open at</Text><Text  type={computeTextStyleByProfitPercent(order.o_diffPricePercent)}>: {order.o_openTime}</Text></p>
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
