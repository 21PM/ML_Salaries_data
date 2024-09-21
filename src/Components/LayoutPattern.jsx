import React, { useState } from 'react';
import NewTable from './NewTable';
import Navbar from './NavBar';
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  UserSwitchOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('About', '2',<a href="#contact" className="transition duration-300"><TeamOutlined /></a>),
  getItem('Social Media', 'sub1', <UserSwitchOutlined />, [
    getItem('LinkedIn', '3', <a href="https://www.linkedin.com/in/paras-more-428988173/" id="linkedin" target="_blank">
     <LinkedinOutlined/>
    </a>),
    getItem('Github', '4', <a href="https://github.com/21PM" id="github" target="_blank" >
     <GithubOutlined/>
     </a>),
  ]),
  getItem('Contact Us', '5', <a href="#contact" className="transition duration-300"><PhoneOutlined/></a>
  ),
];

const LayoutPattern = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Content
          style={{
            margin: '0 16px',
            padding: '24px',
            flex: '1 0 auto',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Breadcrumb style={{ margin: '16px 0' }} />
          <div style={{ minHeight: '360px' }}>
            <NewTable />
          </div>
        </Content>
        <Footer
      id="contact" // Added ID for scrolling
      style={{
        textAlign: 'left',
        background: '#001529',
        color: '#ffffff',
        position: 'static',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px 10px', // Added padding for better spacing
      }}
    >
      <div className="footer-container xs:flex xs:flex-col lg:flex lg:flex-row lg:gap-40 items-center justify-center">
        <div className="contact-info">
          <h4 style={{ marginBottom: '16px', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Contact Information
          </h4>
          <div>
            <p style={{ margin: '4px 0' }}>
              <EnvironmentOutlined /> <strong>Address:</strong> Veer Sambhaji Nagar, Mulund West, Mumbai, Maharashtra, India
            </p>
            <p style={{ margin: '4px 0' }} className='flex gap-2'>
              <PhoneOutlined /> <strong>Contact Us:</strong> 9372088574
            </p>
            <p style={{ margin: '4px 0' }} className='flex gap-2'>
              <MailOutlined />
              <strong>Email:</strong>
              <a href="mailto:parasmore21@gmail.com" style={{ color: '#1677ff', textDecoration: 'none', marginLeft: '5px' }}>
                parasmore21@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="social-media">
          <h4 style={{ marginBottom: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}>
            Social Media
          </h4>
          <p style={{ margin: '4px 0' }}>
            <LinkedinOutlined /> <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/paras-more-428988173/" target="_blank" rel="noopener noreferrer" style={{ color: '#1677ff', textDecoration: 'none', marginLeft: '5px' }}>
              LinkedIn Profile
            </a>
          </p>
          <p style={{ margin: '4px 0' }}>
            <GithubOutlined /> <strong>GitHub:</strong>
            <a href="https://github.com/21PM" target="_blank" rel="noopener noreferrer" style={{ color: '#1677ff', textDecoration: 'none', marginLeft: '5px' }}>
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </Footer>


      </Layout>
    </Layout>
  );
};

export default LayoutPattern;
