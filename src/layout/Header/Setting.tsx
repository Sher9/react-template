import { CSSProperties, useState } from 'react';
import { Button, Card, ColorPicker, Drawer } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { lightenColor } from '@/utils/color';
import { motion } from 'framer-motion';
import { useGlobalStore } from '@/store/global'
import screenfull from 'screenfull';
export default function SettingButton() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const setDarkMode = useGlobalStore((state) => state.setDarkMode)
    const setColorPrimary = useGlobalStore((state) => state.setColorPrimary)
    const darkMode = useGlobalStore((state) => state.darkMode)
    const colorPrimary = useGlobalStore((state) => state.colorPrimary)
    //换肤
    const changeMode = (checked: boolean) => {
        setDarkMode(checked)
    }
    //全屏
    const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen);
    const toggleFullScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle();
            setIsFullscreen(!isFullscreen);
        }
    };


    const style: CSSProperties = {
        backdropFilter: 'blur(20px)',
    };


    return (
        <div className="setting-button">
            <motion.div
                animate={{
                    rotate: [0, drawerOpen ? 0 : 360],
                }}
                transition={{
                    duration: 12,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                whileTap="tap"
                whileHover="hover"
                onClick={() => setDrawerOpen(true)}
            >
                <SvgIcon name={'ybt-setting'} size={24} />
            </motion.div>
            <Drawer title="设置"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                closable={false}
                width={280}
                styles={{
                    body: { padding: 0 },
                    mask: { backgroundColor: 'transparent' },
                }}
                style={style}
                extra={
                    <CloseOutlined onClick={() => setDrawerOpen(false)} />
                }
                footer={
                    <Button type="dashed" block size="large" onClick={toggleFullScreen}>
                        <div className="fullscreen-button">
                            {isFullscreen ? (
                                <>
                                    <SvgIcon
                                        name={"settings-exit-fullscreen"}
                                        color={colorPrimary}
                                        style={{ marginRight: 8 }}
                                    />
                                    <span>退出全屏</span>
                                </>
                            ) : (
                                <>
                                    <SvgIcon name={"settings-fullscreen"} style={{ marginRight: 8 }} />
                                    <span>全屏</span>
                                </>
                            )}
                        </div>
                    </Button>
                }
            >
                <div style={{ padding: 16 }}>

                    <div>
                        <p>
                            模式
                        </p>
                        <div className='mode-container'>
                            <Card onClick={() => changeMode(false)} style={{ backgroundColor: !darkMode ? lightenColor(colorPrimary, 0.9) : 'rgba(0, 0, 0, 0.04)' }} className='card-container'>
                                <SvgIcon name={'settings-mode-sun'} size={20} color={!darkMode ? colorPrimary : ''} />
                            </Card>

                            <Card onClick={() => changeMode(true)} className='card-container'>
                                <SvgIcon name={'settings-mode-moon'} size={20} color={darkMode ? colorPrimary : ''} />
                            </Card>

                        </div>
                    </div>

                    <div>
                        <p>
                            主题颜色
                        </p>
                        <ColorPicker value={colorPrimary} onChangeComplete={(color) => {
                            setColorPrimary(color.toHexString())
                        }} />
                    </div>
                </div>

            </Drawer>
        </div>
    )
}