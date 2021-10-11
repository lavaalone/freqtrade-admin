import './App.css';
import 'antd/dist/antd.css';
import { useState, useEffect } from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import Bots from './components/Bots';

function App() {
  const { Header, Content, Footer } = Layout;
  const [botData, setBotData] = useState([])

  const BotColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'bot_name',
      key: 'bot_name',
    },
    {
      title: 'Profit USD',
      dataIndex: 'profit_usd',
      key: 'profit_usd',
    },
    {
      title: 'Profit USD',
      dataIndex: 'profit_per',
      key: 'profit_per',
    },
    {
      title: 'Trades',
      dataIndex: 'total_trades',
      key: 'total_trades',
    },
    {
      title: 'Wining Trades',
      dataIndex: 'win_trades',
      key: 'win_trades',
    },
    {
      title: 'Losing Trades',
      dataIndex: 'lose_trades',
      key: 'lose_trades',
    },
  ];

  const FetchBotData = async() => {
    const resp = await fetch('http://localhost:5000/bots')
    const data = await resp.json()
  
    console.log(data)
    return data
  }

  useEffect(() => {
    const getBotData = async () => {
      const dataFromServer = await FetchBotData()
      setBotData(dataFromServer)
    }
  
    getBotData()
  }, [])

  return (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        < Menu.Item key='1'>Bots</Menu.Item>
        < Menu.Item key='2'>Trades</Menu.Item>
        < Menu.Item key='3'>Balance</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      </Breadcrumb>
      <div className="site-layout-content">
        <Bots columns={BotColumns} data={botData}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>FreqTrade Admin </Footer>
  </Layout>
  );
}

export default App;
