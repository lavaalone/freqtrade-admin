import { Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const Dashboard = ({data}) => {
    const { Text } = Typography;
    
    return (
        <>
            <Row>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Today Status' style={{ width: 300 }}>
                            <p><Text strong>Profit (USD)</Text>: {data && data.current.finalProfit}</p>
                            <p><Text strong>Profit (%)</Text>: {data && data.current.profitPercentage}</p>
                            <p><Text strong>Total Trades</Text>: {data && data.current.totalTrades}</p>
                        </Card>
                    </Space>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Overall Status' style={{ width: 300 }}>
                            <p><Text strong>Profit (USD)</Text>: {data && data.total.finalProfit}</p>
                            <p><Text strong>Profit (%)</Text>: {data && data.total.percentProfit}</p>
                            <p><Text strong>Balance</Text>: {data && data.total.balance}</p>
                        </Card>
                    </Space>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard
