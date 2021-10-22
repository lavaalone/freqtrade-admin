import { Space } from 'antd';
import { Row, Col, Card, Typography, Button } from 'antd';
import { Popconfirm, message } from 'antd';

const Trades = ({data, apiEndpoint}) => {
    const { Text } = Typography;

    const forcesell = async (trade) => {
        const resp = await fetch(`${apiEndpoint}/bot/force-sell?botName=${trade.bot_name}&tradeID=${trade.trade_id}`)
        const data = await resp.text()
        message.success(data);
    }

    const holdtrade = async (trade) => {
        const resp = await fetch(`${apiEndpoint}/bot/hold-trade?botName=${trade.bot_name}&tradeID=${trade.trade_id}`)
        const data = await resp.text()
        message.success(data);
    }

    const activatePlanB = async (trade) => {
        const resp = await fetch(`${apiEndpoint}/order/activate-plan-b?botName=${trade.bot_name}&tradeID=${trade.trade_id}`)
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
                {data.map((trade) => (
                    <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title={trade.pair} style={{ width: 300 }}>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.profit_pct)}>Profit (USD)</Text><Text type={computeTextStyleByProfitPercent(trade.profit_pct)}>: {trade.profit_fiat.substring(0,6) + " (" + trade.profit_pct + "%)"}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.profit_pct)}>Rate (USD)</Text><Text type={computeTextStyleByProfitPercent(trade.profit_pct)}>: {trade.open_rate.substring(0,6) + " / " + trade.current_rate.substring(0,6)}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.profit_pct)}>Stake (USD)</Text><Text type={computeTextStyleByProfitPercent(trade.profit_pct)}>: {trade.stake_amount}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.profit_pct)}>Bot</Text><Text type={computeTextStyleByProfitPercent(trade.profit_pct)}>: {trade.bot_name}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.profit_pct)}>Trade Time</Text><Text type={computeTextStyleByProfitPercent(trade.profit_pct)}>: {trade.trade_elapsed_hr + " hours ago"}</Text></p>
                            <p>
                                <Space>
                                    <Popconfirm
                                        title="Are you sure to hold this trade (+1% profit)?"
                                        onConfirm={() => holdtrade(trade)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Hold +1%</Button>
                                    </Popconfirm>

                                    <Popconfirm
                                        title="Are you sure to force sell this trade?"
                                        onConfirm={() => forcesell(trade)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Force Sell</Button>
                                    </Popconfirm>
                                </Space>
                            </p>
                            <p>
                                <Popconfirm
                                        title="Are you sure to activate Plan B for this trade?"
                                        onConfirm={() => activatePlanB(trade)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button type='submit'>Activate Plan B</Button>
                                </Popconfirm>
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
