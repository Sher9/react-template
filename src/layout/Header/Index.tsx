

import { theme, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useGlobalStore } from '@/store/global'
import "./Index.scss"
import SettingButton from './Setting'
import Notice from './Notice'
function MyHeader() {
  const darkMode = useGlobalStore((state) => state.darkMode)
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  return (
    <div
      className="header-div"
      style={{
        background: colorBgContainer,
        borderBottom: darkMode ? '1px dashed rgba(66, 66, 66, 0.6)' : '1px dashed rgba(217, 217, 217, 0.6)'
      }}>
      <h1>header</h1>

      <div className='right-container'>

        {/* <AlertOutlined className='flashing-icon' size={24} /> */}
        <Notice />
        <SettingButton />
        <Avatar size="small" icon={<UserOutlined />} className='icon' />
      </div>




    </div >
  );
}

export default MyHeader;
