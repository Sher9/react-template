import React from 'react';
import { ConfigProvider, theme, Layout } from 'antd'
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css'
import RouterComponent from "@/routes"
import { useGlobalStore } from '@/store/global'
import MyMenu from '@/layout/Menu';
import MyHeader from "@/layout/Header/Index"
import MyTags from "@/layout/Tags"
const { Header, Content, Sider } = Layout;
import {
  customThemeTokenConfig,
  themeModeToken,
  customComponentConfig,
} from './theme';



const App: React.FC = () => {
  const darkMode = useGlobalStore((state) => state.darkMode)
  const colorPrimary = useGlobalStore((state) => state.colorPrimary)
  const algorithm = darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm;
  const themeMode = darkMode ? "dark" : "light"
  const themeToken = { colorPrimary, ...customThemeTokenConfig, ...themeModeToken[themeMode].token }
  document.title = import.meta.env.VITE_APP_TITLE
  return (
    <StyleWrapper $darkMode={darkMode}>
      <ConfigProvider
        theme={{
          token: themeToken,
          components: { ...customComponentConfig, ...themeModeToken[themeMode].components },
          algorithm,
        }}>
        <Layout style={{ height: "100%" }}>
          <Sider width={260} style={{ background: themeToken.colorBgContainer }}>
            <MyMenu />
          </Sider>
          <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
              <div className="demo-logo" />
              <MyHeader />
            </Header>
            <MyTags />
            <Content
              style={{
                padding: 24,
                margin: 15,
                minHeight: 280,
                background: themeToken.colorBgContainer
              }}
            >
              <HashRouter>
                <RouterComponent />
              </HashRouter>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider >


    </StyleWrapper>


  );
};

export default App;


const StyleWrapper = styled.div<{ $darkMode: boolean }>`
  height: 100%;
  width: 100%;
  /* 设置滚动条的整体样式 */
  ::-webkit-scrollbar {
    width: 8px; /* 设置滚动条宽度 */
  }

  /* 设置滚动条轨道的样式 */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${(props) => (props.$darkMode ? '#2c2c2c' : '#FAFAFA')}
  }

  /* 设置滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => (props.$darkMode ? '#6b6b6b' : '#C1C1C1')};
  }

  /* 设置鼠标悬停在滚动条上的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => (props.$darkMode ? '#939393' : '#7D7D7D')};
  }
`;
