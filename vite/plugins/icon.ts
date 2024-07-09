import Icons from 'unplugin-icons/vite'
/**
 * 允许项目访问iconify图标库
 * @returns 
 */
export default function setupIcons() {
  return Icons({
    autoInstall: true,
    compiler: 'jsx',
    jsx: 'react',
    scale: 1,
    defaultStyle: `
      vertical-align: -0.15em;
      fill: currentcolor;
      overflow: hidden;
    `,
  })
}
