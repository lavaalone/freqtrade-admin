import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from "react"
import {
  RobotOutlined,
  FireOutlined,
  DollarOutlined
} from '@ant-design/icons';

function App() {
  const { Content, Footer, Sider } = Layout;

  const [state, setState] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    setState({ collapsed });
  };

  const { collapsed } = state;

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<RobotOutlined />}>
              Bots
            </Menu.Item>
            <Menu.Item key="2" icon={<FireOutlined />}>
              Trades
            </Menu.Item>
            <Menu.Item key="3" icon={<DollarOutlined />}>
              Balance
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Bot</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
}

export default App;
