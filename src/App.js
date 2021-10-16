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
import Dashboard from './components/Dashboard';

function App() {
  // json-server
  // const apiEndpoint = 'http://localhost:5000';
  // api server
  const apiEndpoint = 'http://202.182.100.37/tet';

  const { Header, Content } = Layout;
  const [botData, setBotData] = useState([])
  const [tradeData, setTradeData] = useState([])
  const [orderData, setOrderData] = useState([])
  const [historyData, setHistoryData] = useState([])
  const [dashboardData, setDashboardData] = useState()
  

  const FetchBotData = async() => {
    const resp = await fetch(`${apiEndpoint}/bots`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchTradeData = async() => {
    const resp = await fetch(`${apiEndpoint}/trades`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchOrderData = async() => {
    const resp = await fetch(`${apiEndpoint}/orders`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchHistoryData = async() => {
    const resp = await fetch(`${apiEndpoint}/history`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchDashboardData = async() => {
    const resp = await fetch(`${apiEndpoint}/dashboard`)
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

    const getDashboardData = async () => {
      const dataFromServer = await FetchDashboardData()
      setDashboardData(dataFromServer)
    }
  
    getBotData()
    getTradeData()
    getOrderData()
    getHistoryData()
    getDashboardData()

    setInterval(() => {
      getBotData()
      getTradeData()
      getOrderData()
      getHistoryData()
      getDashboardData()
    }, 30000);
  }, [])

  return (
    <Router>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
      < Menu.Item key='0'>
          <Link to='/'>Dashboard </Link> 
          </Menu.Item>

          < Menu.Item key='1'>
        <Link to='/trades'>Trades</Link> 
          </Menu.Item>

        < Menu.Item key='2'>
        <Link to='/orders'>Orders</Link> 
          </Menu.Item>

          < Menu.Item key='3'>
        <Link to='/history'>History</Link> 
          </Menu.Item>

        < Menu.Item key='4'>
        <Link to='/wallet'>Wallet</Link> 
          </Menu.Item>

          < Menu.Item key='5'>
          <Link to='/bots'>Bots </Link> 
          </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Route path='/' exact render={(props) => (
        <Dashboard dataDashboard={dashboardData} dataTrades={tradeData} dataOrders={orderData}/>
      )} />
      <Route path='/bots' exact render={(props) => (
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
