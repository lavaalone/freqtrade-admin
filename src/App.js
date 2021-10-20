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
import PlanB from './components/PlanB';

function App() {
  // json-server
  // const apiEndpoint = 'http://localhost:5000';
  // api server PROD
  const apiEndpoint = 'http://tet.thinhnguyen.me';
  // api server DEV
  // const apiEndpoint = 'http://localhost:9000';

  const { Header, Content } = Layout;
  const [botData, setBotData] = useState([])
  const [tradeData, setTradeData] = useState([])
  const [orderData, setOrderData] = useState([])
  const [historyData, setHistoryData] = useState([])
  const [dashboardData, setDashboardData] = useState()
  const [planBData, setPlanBData] = useState([])
  
  const FetchBotData = async() => {
    const resp = await fetch(`${apiEndpoint}/tet/bots`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchTradeData = async() => {
    const resp = await fetch(`${apiEndpoint}/tet/trades`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchOrderData = async() => {
    const resp = await fetch(`${apiEndpoint}/tet/orders`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchHistoryData = async() => {
    const resp = await fetch(`${apiEndpoint}/tet/history`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchDashboardData = async() => {
    const resp = await fetch(`${apiEndpoint}/tet/dashboard`)
    const data = await resp.json()
    console.log(data)
    return data
  }

  const FetchPlanBData = async() => {
    const resp = await fetch(`${apiEndpoint}/order/get-plan-b`)
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

    const getPlanBData = async () => {
      const dataFromServer = await FetchPlanBData()
      setPlanBData(dataFromServer)
    }
  
    getBotData()
    getTradeData()
    getOrderData()
    getHistoryData()
    getDashboardData()
    getPlanBData()

    setInterval(() => {
      getBotData()
      getTradeData()
      getOrderData()
      getHistoryData()
      getDashboardData()
      getPlanBData()
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
        <Link to='/plan-b'>Plan B</Link> 
          </Menu.Item>

        {/* < Menu.Item key='4'>
        <Link to='/wallet'>Wallet</Link> 
          </Menu.Item> */}

          {/* < Menu.Item key='5'>
          <Link to='/bots'>Bots </Link> 
          </Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Route path='/' exact render={(props) => (
        <Dashboard dataDashboard={dashboardData} dataTrades={tradeData} dataOrders={orderData} dataHistory={historyData}/>
      )} />
      <Route path='/trades' exact render={(props) => (
        <Trades data={tradeData} apiEndpoint={apiEndpoint}/>
      )} />
      <Route path='/orders' exact render={(props) => (
        <Orders data={orderData} apiEndpoint={apiEndpoint}/>
      )} />
          <Route path='/history' exact render={(props) => (
        <History data={historyData} />
      )} />
          <Route path='/plan-b' exact render={(props) => (
        <PlanB data={planBData} />
      )} />
    </Content>
      </Layout>
      </Router>
  );
}

export default App;
