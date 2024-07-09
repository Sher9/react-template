import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import type { PluginOption } from 'vite'
import setupMock from './mock'
import setupAutoImport from './auto-import'
import setupSvgIcon from './svg-icon'
import setupIcons from './icon'
import setupCompression from './compression'
import setupEslint from './eslint'
import setupPages from './pages'
export default function setupVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS } = viteEnv

  const plugins: PluginOption[] = [react(),
  // 同步tsconfig.json的path设置alias
  tsconfigPaths()]
  plugins.push(setupAutoImport())
  plugins.push(setupIcons())
  plugins.push(setupSvgIcon(isBuild))
  plugins.push(setupEslint())
  plugins.push(setupPages())
  if (isBuild) {
    const compressList = VITE_BUILD_COMPRESS.split(',')
    if (compressList.includes('gzip') || compressList.includes('brotli'))
      plugins.push(...setupCompression(viteEnv))
  }
  VITE_USE_MOCK === 'true' && plugins.push(setupMock(isBuild))
  return plugins
}
