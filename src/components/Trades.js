import { Space } from 'antd';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Popconfirm, message } from 'antd';

const Trades = ({data, apiEndpoint}) => {
    const { Text } = Typography;

    const forcesell = async (trade) => {
        message.success('Click on Yes');
        const resp = await fetch(`${apiEndpoint}/bot/force-sell?botName=${trade.bot_name}&tradeID=${trade.trade_id}`)
        // const data = await resp.json()
        // message.success(data);
    }

    const activatePlanB = async (trade) => {
        message.success('Click on Yes');
        const resp = await fetch(`${apiEndpoint}/order/activate-plan-b?botName=${trade.bot_name}&tradeID=${trade.trade_id}`)
        // const data = await resp.json()
        // message.success(data);
    }

    const cancel = () => {
        message.error('Click on No');
    }

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
                            <p>
                                <Space>
                                    <Popconfirm
                                        title="Are you sure to force sell this trade?"
                                        onConfirm={() => forcesell(trade)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Force Sell</Button>
                                    </Popconfirm>

                                    <Popconfirm
                                        title="Are you sure to activate Plan B for this trade?"
                                        onConfirm={() => activatePlanB(trade)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Activate Plan B</Button>
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

export default Trades
