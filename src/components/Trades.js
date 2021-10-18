import { Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const Trades = ({data}) => {
    const { Text } = Typography;

    // const executeCommand = async (trade, action) => {
    //     // const resp = await fetch(`http://localhost:5000/trades?action=${action}&trade_id=${trade.id}`)
    //     // const data = await resp.json()
    //     console.log(action)
    //     return data
    //   }

    return (
        <>
            <Row>
                {data.map((trade) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={trade.pair + " (" + trade.profit_pct + "%)"} style={{ width: 300 }}>
                            {/* <p><Text strong>Id</Text>: {trade.trade_id}</p> */}
                            {/* <p><Text strong>Pair</Text>: {trade.pair}</p> */}
                            <p><Text strong>Profit (USD)</Text>: {trade.profit_fiat.substring(0,6)}</p>
                            {/* <p><Text strong>Profit (%)</Text>: {trade.profit_pct + "%"}</p> */}
                            <p><Text strong>Rate (USD)</Text>: {trade.open_rate.substring(0,6) + " / " + trade.current_rate.substring(0,6)}</p>
                            {/* <p><Text strong>Current rate (USD)</Text>: {trade.current_rate}</p> */}
                            <p><Text strong>Stake (USD)</Text>: {trade.stake_amount}</p>
                            {/* <p><Text strong>Openning</Text>: {trade.is_open}</p> */}
                            <p><Text strong>Bot</Text>: {trade.bot_name}</p>
                            {/* <p><Text strong>Strategy</Text>: {trade.strategy}</p> */}
                            <p><Text strong>Trade Time</Text>: {trade.trade_elapsed_hr + " hours ago"}</p>
                            {/* <p>
                                <Space>
                                    <Button type='submit' onClick={() => executeCommand(trade, 'forcesell')}>Force Sell</Button>
                                    <Button type='submit' onClick={() => executeCommand(trade, 'delete')}>Delete</Button>
                                    <Button type='submit' onClick={() => executeCommand(trade, 'hold_1')}>Hold + 1%</Button>
                                </Space>
                            </p> */}
                            {/* <p><Text strong>Delete</Text>: </p> */}
                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Trades
