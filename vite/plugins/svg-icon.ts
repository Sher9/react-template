import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
/**
 * 允许项目使用svg作为icon
 * @returns 
 */
export default function setupSvgIcon(isBuild: boolean) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild,
  })
}
