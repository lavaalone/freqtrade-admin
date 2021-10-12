import { Button, Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const Bots = ({data}) => {
    const { Text } = Typography;
    return (
        <>
            <Row>
                {data.map((bot) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={bot.id + "|" + bot.bot_name} style={{ width: 300 }}>
                            <p><Text strong>Profit (USD)</Text>: {bot.profit_usd}</p>
                            <p><Text strong>Profit (%)</Text>: {bot.profit_per}</p>
                            <p><Text strong>Total Trades</Text>: {bot.total_trades}</p>
                            <p><Text strong>Winning Trades</Text>: {bot.win_trades}</p>
                            <p><Text strong>Losing Trades</Text>: {bot.lose_trades}</p>
                            <p><Text strong>Reload Config</Text>: <Button>Reload</Button></p>
                            <p><Text strong>Start the bot</Text>: <Button>Start</Button></p>
                            <p><Text strong>Stop the bot</Text>: <Button>Stop</Button></p>
                            <p><Text strong>Stop buy</Text>: <Button>Stop buy</Button></p>
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Bots
