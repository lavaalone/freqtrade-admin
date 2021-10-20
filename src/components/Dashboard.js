import { Button, Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';
import { Link } from "react-router-dom"

const Dashboard = ({dataDashboard, dataTrades, dataOrders, dataHistory, dataPlanB}) => {
    const { Text } = Typography;
    
    return (
        <>
            <Row>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Today Status' style={{ width: 300 }}>
                            <p><Text strong>Profit (USD)</Text>: {dataDashboard && dataDashboard.current.finalProfit.toString().substring(0,6) + " (" + dataDashboard.current.profitPercentage + "%)"}</p>
                            <p><Text strong>Total Trades</Text>: {dataDashboard && dataDashboard.current.totalTrades}</p>
                        </Card>
                    </Space>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Overall Status' style={{ width: 300 }}>
                            <p><Text strong>Profit (USD)</Text>: {dataDashboard && dataDashboard.total.finalProfit.toString().substring(0,6) + " (" + dataDashboard.total.percentProfit + "%)"}</p>
                            <p><Text strong>Total Balance</Text>: {dataDashboard && dataDashboard.total.balance}</p>
                        </Card>
                    </Space>
                </Col>
                {dataDashboard && dataDashboard.wallet.map((exchangeWallet) =>
                    <Col span={6} xs={24} xl={6}>
                        <Space>
                            <Card title={exchangeWallet.exchange + ' Balance'} style={{ width: 300 }}>
                            <p><Text strong>Total Balance</Text>: {exchangeWallet.totalBalance.toString().substring(0,6)}</p>
                            <p><Text strong>Free USDT</Text>: {exchangeWallet.freeUSDTBalance.toString().substring(0,6)}</p>
                            </Card>
                        </Space>
                    </Col>
                )}
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Open Trades' style={{ width: 300 }}
                        extra={<Link to='/trades'><Button>View more</Button></Link>}
                        >
                        {dataTrades && dataTrades.map((trade) => (
                            <p><Text strong>{trade.pair}</Text>: {trade.profit_fiat.substring(0,6) + " (" + trade.profit_pct + "%)"}</p>
                        ))}
                        </Card>
                    </Space>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Open Orders' style={{ width: 300 }}
                        extra={<Link to='/orders'><Button>View more</Button></Link>}
                        >
                        {dataOrders && dataOrders.map((order) => (
                            <p><Text strong>{order.o_currency.replace("_", "/") + " (" + order.o_type + ")"}</Text>: {order.o_limitPrice.toString().substring(0,6) + " / " + order.o_lastPrice.toString().substring(0,6)}</p>
                        ))}
                        </Card>
                    </Space>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Trade History' style={{ width: 300 }}
                        extra={<Link to='/history'><Button>View more</Button></Link>}
                        >
                        {dataHistory && dataHistory.map((trade) => (
                            <p><Text strong>{trade.trade_id + ". " + trade.pair}</Text>: {trade.close_profit_abs.toString().substring(0,6) + " (" + trade.profit_pct + "%)"}</p>
                        ))}
                        </Card>
                    </Space>
                </Col>
                <Col span={6} xs={24} xl={6}>
                    <Space>
                        <Card title='Plan B History' style={{ width: 300 }}
                        extra={<Link to='/plan-b'><Button>View more</Button></Link>}
                        >
                        {dataPlanB && dataPlanB.map((planBOrder) => (
                            <p><Text strong>{planBOrder.id + ". " + planBOrder.base + "/" + planBOrder.counter + "(" + planBOrder.status + ")"}</Text>: {planBOrder.originalAmount.toString().substring(0,6) + " at $" + planBOrder.originalOpenRate.toString().substring(0,6) + ""}</p>
                        ))}
                        </Card>
                    </Space>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard
