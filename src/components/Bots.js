import { Button, Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const Bots = ({data}) => {
    const { Text } = Typography;

    const executeCommand = async (bot, action) => {
        const resp = await fetch(`http://localhost:5000/bots?action=${action}&bot_id=${bot.id}`)
        const data = await resp.json()
        console.log(data)
        return data
      }

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
                            <p><Text strong>Status</Text>: {bot.status}</p>
                            <p><Text strong>Reload Config</Text>: <Button type='submit' onClick={() => executeCommand(bot, 'reload')}>Reload</Button></p>
                            <p><Text strong>Start the bot</Text>: <Button type='submit' onClick={() => executeCommand(bot, 'start')}>Start</Button></p>
                            <p><Text strong>Stop the bot</Text>: <Button type='submit' onClick={() => executeCommand(bot,'stop')}>Stop</Button></p>
                            <p><Text strong>Stop buy</Text>: <Button type='submit' onClick={() => executeCommand(bot, 'stopbuy')}>Stop buy</Button></p>
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Bots
