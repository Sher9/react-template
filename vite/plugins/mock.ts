import { vitePluginFakeServer } from 'vite-plugin-fake-server'
/**
 * mock服务器相关配置
 * @param isBuild 
 * @returns 
 */
export default function setupMock(isBuild: boolean) {
  return vitePluginFakeServer({
    logger: !isBuild,
    include: 'src/mock',
    infixName: false,
    enableProd: isBuild,
  })
}
