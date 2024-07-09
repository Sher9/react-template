import { faker } from '@faker-js/faker';
import { Badge, Button, Drawer, Space, Tabs, TabsProps } from 'antd';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { useGlobalStore } from '@/store/global'
import ProTag from '@/components/antd/tag';
export default function Notice() {
    const [count, setCount] = useState(4);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const colorPrimary = useGlobalStore((state) => state.colorPrimary)
    return (
        <div className='notice-div'>
            <Badge
                count={count}
                styles={{
                    root: { color: 'inherit' },
                    indicator: { color: '#fff' },
                }}
            >
                <SvgIcon name={"solar:bell-bing-bold-duotone"} size={24} onClick={() => setDrawerOpen(true)} />
            </Badge>
            <Drawer
                placement="right"
                title="消息通知"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                closable={false}
                width={420}
                styles={{
                    body: { padding: 0 },
                    mask: { backgroundColor: 'transparent' },
                }}
                style={{ backdropFilter: 'blur(20px)' }}
                extra={

                    <SvgIcon name={"solar:check-read-broken"} size={20} color={colorPrimary} onClick={() => {
                        setCount(0);
                        setDrawerOpen(false);
                    }} />

                }
            >

                <NoticeTab />

            </Drawer>
        </div>
    )

}


function NoticeTab() {
    const darkMode = useGlobalStore((state) => state.darkMode)
    const tabChildren: ReactNode = (
        <div className='content' style={{ maxHeight: 'calc(100vh - 180px)' }}>
            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                    </div>
                    <span className="text">约1小时之前</span>
                    <div className="button">
                        <Space>
                            <Button type="primary" size={'small'}>回复</Button>
                            <Button size={'small'}>忽略</Button>
                        </Space>
                    </div>
                </div>
            </div>

            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                        <span className="text">传了一个文件到文件服务器</span>
                    </div>
                    <span className="text">5小时之前</span>
                    <div
                        className="message"
                        style={{ backgroundColor: darkMode ? '#2A333E' : 'rgba(0, 0, 0, 0.04)' }}
                    >
                        <div className="message-content">
                            <span className="title">@{faker.person.fullName()}</span>
                            <span className="text">{faker.lorem.lines(2)}</span>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Space>
                            <Button type="primary" size={'small'}>回复</Button>
                        </Space>
                    </div>
                </div>
            </div>


            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                        <span className="text"> 传了一个文件到文件服务器 </span>
                    </div>
                    <span className="text">2天之前</span>
                    <div
                        className="file"
                        style={{ backgroundColor: darkMode ? '#2A333E' : 'rgba(0, 0, 0, 0.04)' }}
                    >
                        <SvgIcon name={"file_audio"} size={48} />
                        <div className="file-content">
                            <span className="title">需求文档录音</span>
                            <span className="text">1.2GB </span>
                        </div>
                        <Button style={{ marginTop: 8 }}>下载</Button>
                    </div>
                </div>
            </div>


            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                        <span className="text"> 传了一个文件到文件服务器 </span>
                    </div>
                    <span className="text">2天之前</span>
                    <div
                        className="file"
                        style={{ backgroundColor: darkMode ? '#2A333E' : 'rgba(0, 0, 0, 0.04)' }}
                    >
                        <SvgIcon name={"file_audio"} size={48} />
                        <div className="file-content">
                            <span className="title">需求文档录音</span>
                            <span className="text">1.2GB </span>
                        </div>
                        <Button style={{ marginTop: 8 }}>下载</Button>
                    </div>
                </div>
            </div>

            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                        <span className="text"> 传了一个文件到文件服务器 </span>
                    </div>
                    <span className="text">2天之前</span>
                    <div
                        className="file"
                        style={{ backgroundColor: darkMode ? '#2A333E' : 'rgba(0, 0, 0, 0.04)' }}
                    >
                        <SvgIcon name={"file_audio"} size={48} />
                        <div className="file-content">
                            <span className="title">需求文档录音</span>
                            <span className="text">1.2GB </span>
                        </div>
                        <Button style={{ marginTop: 8 }}>下载</Button>
                    </div>
                </div>
            </div>

            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                        <span className="text"> 传了一个文件到文件服务器 </span>
                    </div>
                    <span className="text">2天之前</span>
                    <div
                        className="file"
                        style={{ backgroundColor: darkMode ? '#2A333E' : 'rgba(0, 0, 0, 0.04)' }}
                    >
                        <SvgIcon name={"file_audio"} size={48} />
                        <div className="file-content">
                            <span className="title">需求文档录音</span>
                            <span className="text">1.2GB </span>
                        </div>
                        <Button style={{ marginTop: 8 }}>下载</Button>
                    </div>
                </div>
            </div>

            <div className="content-item"
                style={{
                    borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
                }}>
                <div className="content-text">
                    <div>
                        <span className="title">{faker.person.fullName()}</span>
                        <span className="text"> 传了一个文件到文件服务器 </span>
                    </div>
                    <span className="text">2天之前</span>
                    <div
                        className="file"
                        style={{ backgroundColor: darkMode ? '#2A333E' : 'rgba(0, 0, 0, 0.04)' }}
                    >
                        <SvgIcon name={"file_audio"} size={48} />
                        <div className="file-content">
                            <span className="title">需求文档录音</span>
                            <span className="text">1.2GB </span>
                        </div>
                        <Button style={{ marginTop: 8 }}>下载</Button>
                    </div>
                </div>
            </div>
        </div>
    );
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: (
                <div className="tab-item">
                    <span>全部</span>
                    <ProTag color="processing">4</ProTag>
                </div>
            ),
            children: tabChildren,
        },
        {
            key: '2',
            label: (
                <div className="tab-item">
                    <span>未读</span>
                    <ProTag color="error">2</ProTag>
                </div>
            ),
            children: tabChildren,
        },
        {
            key: '3',
            label: (
                <div className="tab-item">
                    <span>已读</span>
                    <ProTag color="green">2</ProTag>
                </div>
            ),
            children: tabChildren,
        },
    ];
    return (
        <StyleWrapper $darkMode={darkMode}>
            <Tabs defaultActiveKey="1" items={items} />
        </StyleWrapper>
    );
}


const StyleWrapper = styled.div<{ $darkMode: boolean }>`
  padding: 0 20px;
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
