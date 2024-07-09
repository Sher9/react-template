import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-antd-resolver'
import IconsResolver from 'unplugin-icons/resolver'

export default function setupAutoImport() {
  return AutoImport({
    resolvers: [AntdResolver(), IconsResolver()],
    imports: ['react', 'react-router-dom'],
    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    dirs: ['src/components/**'],
    // Filepath to generate corresponding .d.ts file.
    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
    // Set `false` to disable.
    dts: 'types/auto-imports.d.ts',
  })
}
