import { Space } from 'antd';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Popconfirm, message } from 'antd';

const PlanB = ({data, apiEndpoint}) => {
    const { Text } = Typography;

    const startRecover = async (planBOrder) => {
        const resp = await fetch(`${apiEndpoint}/order/recover-plan-b?planBId=${planBOrder.id}`)
        const data = await resp.text()
        message.success(data);
    }

    const cancel = () => {
        message.error('Click on No');
    }

    return (
        <>
            <Row>
                {data.map((planBOrder) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={planBOrder.id + ". " + planBOrder.base + "/" + planBOrder.counter} style={{ width: 300 }}>
                            <p><Text strong>Status</Text>: {planBOrder.status}</p>
                            <p><Text strong>Original Amount/Rate</Text>: {planBOrder.originalAmount.toString().substring(0,6) + "/" + planBOrder.originalOpenRate.toString().substring(0,6)}</p>
                            <p><Text strong>New Amount/Rate</Text>: {planBOrder.newAmount.toString().substring(0,6) + "/" + planBOrder.currentOpenRate.toString().substring(0,6)}</p>
                            <p><Text strong>Estimate profit</Text>: {planBOrder.estimateProfit / 100 + " (" + planBOrder.diffRatePercent + "%)"} </p>
                            <p><Text strong>Open at</Text>: {planBOrder.time}</p>
                            <p>
                                <Space>
                                    <Popconfirm
                                        title="Are you sure to start recovering this Plan B Order ?"
                                        onConfirm={() => startRecover(planBOrder)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Start Recover</Button>
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

export default PlanB
