import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

function App() {
  const { Header, Content, Footer } = Layout;

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
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>FreqTrade Admin </Footer>
  </Layout>
  );
}

export default App;
