import { Button, Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const History = ({data}) => {
    const { Text } = Typography;

    const executeCommand = async (trade, action) => {
        const resp = await fetch(`http://localhost:5000/trades?action=${action}&trade_id=${trade.id}`)
        const data = await resp.json()
        console.log(data)
        return data
      }

    return (
        <>
            <Row>
                {data.map((trade) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={trade.exchange + " | " + trade.pair} style={{ width: 300 }}>
                            <p><Text strong>Id</Text>: {trade.id}</p>
                            <p><Text strong>Profit (USD)</Text>: {trade.profit_usd}</p>
                            <p><Text strong>Profit (%)</Text>: {trade.profit_per}</p>
                            <p><Text strong>Status</Text>: {trade.status}</p>
                            <p><Text strong>Time</Text>: {trade.time}</p>
                            <p><Text strong>Delete</Text>: <Button type='submit' onClick={() => executeCommand(trade, 'delete')}>Delete</Button></p>
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default History
