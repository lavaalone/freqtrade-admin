import { Space } from 'antd';
import { Row, Col, Card,Typography } from 'antd';

const History = ({data}) => {
    const { Text } = Typography;

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
                        <Card title={trade.trade_id + ". " + trade.pair} style={{ width: 300 }}>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.close_profit_pct)}>Profit (USD)</Text><Text type={computeTextStyleByProfitPercent(trade.close_profit_pct)}>: {trade.close_profit_abs.toString().substring(0,6) + " (" + trade.close_profit_pct + "%)"}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.close_profit_pct)}>Bot</Text><Text type={computeTextStyleByProfitPercent(trade.close_profit_pct)}>: {trade.bot_name}</Text></p>
                            <p><Text strong type={computeTextStyleByProfitPercent(trade.close_profit_pct)}>Close Time</Text><Text type={computeTextStyleByProfitPercent(trade.close_profit_pct)}>: {trade.close_date}</Text></p>

                            </Card>
                            </Space>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default History
