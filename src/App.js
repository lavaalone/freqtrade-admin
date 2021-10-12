import './App.css';
import 'antd/dist/antd.dark.css';
import { useState, useEffect } from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import Bots from './components/Bots';

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
      <Bots data={botData}/>
    </Content>
      </Layout>
  );
}

export default App;
