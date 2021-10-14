import './App.css';
import 'antd/dist/antd.dark.css';
import { useState, useEffect } from "react"
import { Layout, Menu } from 'antd';
import Bots from './components/Bots';
import Trades from './components/Trades';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import Orders from './components/Orders';
import History from './components/History';

function App() {
  const { Header, Content } = Layout;
  const [botData, setBotData] = useState([])
  const [tradeData, setTradeData] = useState([])
  const [orderData, setOrderData] = useState([])
  const [historyData, setHistoryData] = useState([])

  const FetchBotData = async() => {
    const resp = await fetch('http://localhost:5000/bots')
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchTradeData = async() => {
    const resp = await fetch('http://localhost:5000/trades?status=open')
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchOrderData = async() => {
    const resp = await fetch('http://localhost:5000/orders')
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchHistoryData = async() => {
    const resp = await fetch('http://localhost:5000/trades?status=closed')
    const data = await resp.json()
    console.log(data)
    return data
  }

  useEffect(() => {
    const getBotData = async () => {
      const dataFromServer = await FetchBotData()
      setBotData(dataFromServer)
    }

    const getTradeData = async () => {
      const dataFromServer = await FetchTradeData()
      setTradeData(dataFromServer)
    }

    const getOrderData = async () => {
      const dataFromServer = await FetchOrderData()
      setOrderData(dataFromServer)
    }

    const getHistoryData = async () => {
      const dataFromServer = await FetchHistoryData()
      setHistoryData(dataFromServer)
    }
  
    getBotData()
    getTradeData()
    getOrderData()
    getHistoryData()

    setInterval(() => {
      getBotData()
      getTradeData()
      getOrderData()
      getHistoryData()
    }, 30000);
  }, [])

  return (
    <Router>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        < Menu.Item key='1'>
          <Link to='/'>Bots </Link> 
          </Menu.Item>
        < Menu.Item key='2'>
        <Link to='/trades'>Trades</Link> 
          </Menu.Item>
        < Menu.Item key='3'>
        <Link to='/orders'>Orders</Link> 
          </Menu.Item>
        < Menu.Item key='4'>
        <Link to='/wallet'>Wallet</Link> 
          </Menu.Item>
          < Menu.Item key='5'>
        <Link to='/history'>History</Link> 
          </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Route path='/' exact render={(props) => (
        <Bots data={botData}/>
      )} />
      <Route path='/trades' exact render={(props) => (
        <Trades data={tradeData}/>
      )} />
      <Route path='/orders' exact render={(props) => (
        <Orders data={orderData}/>
      )} />
      <Route path='/wallet' exact render={(props) => (
        <p> Wallet </p>
      )} />
            <Route path='/history' exact render={(props) => (
        <History data={historyData} />
      )} />
    </Content>
      </Layout>
      </Router>
  );
}

export default App;
