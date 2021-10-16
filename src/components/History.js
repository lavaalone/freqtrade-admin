import { Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const History = ({data}) => {
    const { Text } = Typography;

    // const executeCommand = async (trade, action) => {
    //     const resp = await fetch(`http://localhost:5000/trades?action=${action}&trade_id=${trade.id}`)
    //     const data = await resp.json()
    //     console.log(data)
    //     return data
    //   }

    return (
        <>
            <Row>
            {data.map((trade) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={trade.trade_id + ". " + trade.pair + " (" + trade.close_profit_pct + "%)"} style={{ width: 300 }}>
                            <p><Text strong>Profit (USD)</Text>: {trade.close_profit_abs.toString().substring(0,6)}</p>
                            {/* <p><Text strong>Profit (%)</Text>: {trade.profit_pct + "%"}</p> */}
                            {/* <p><Text strong>Rate (USD)</Text>: {trade.open_rate + " / " + trade.current_rate}</p> */}
                            {/* <p><Text strong>Current rate (USD)</Text>: {trade.current_rate}</p> */}
                            {/* <p><Text strong>Stake (USD)</Text>: {trade.stake_amount}</p> */}
                            {/* <p><Text strong>Openning</Text>: {trade.is_open}</p> */}
                            <p><Text strong>Bot</Text>: {trade.bot_name}</p>
                            {/* <p><Text strong>Strategy</Text>: {trade.strategy}</p> */}
                            <p><Text strong>Close Time</Text>: {trade.close_date}</p>

                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default History
