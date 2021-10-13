import './App.css';
import 'antd/dist/antd.dark.css';
import { useState, useEffect } from "react"
import { Layout, Menu } from 'antd';
import Bots from './components/Bots';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from "react-router-dom"

function App() {
  const { Header, Content } = Layout;
  const [botData, setBotData] = useState([])

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
    <Router>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        < Menu.Item key='1'>
          <Link to='/'>Bots </Link> 
          </Menu.Item>
        < Menu.Item key='2'>
        <Link to='/trades'>Closed Trades</Link> 
          </Menu.Item>
        < Menu.Item key='3'>
        <Link to='/orders'>Open Orders</Link> 
          </Menu.Item>
        < Menu.Item key='4'>
        <Link to='/wallet'>Wallet</Link> 
          </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Route path='/' exact render={(props) => (
        <Bots data={botData}/>
      )} />
      <Route path='/trades' exact render={(props) => (
        <p> Trades </p>
      )} />
      <Route path='/orders' exact render={(props) => (
        <p> Orders </p>
      )} />
      <Route path='/wallet' exact render={(props) => (
        <p> Wallet </p>
      )} />
    </Content>
      </Layout>
      </Router>
  );
}

export default App;
