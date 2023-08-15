import type { InlineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'

export default (type: 'component' | 'icon'): InlineConfig => {
  const entry =
    type === 'component' ? 'components/jvb-vue.ts' : 'icon/jvb-vue-icon.ts'
  const entryFileName = type === 'component' ? 'jvb-vue' : 'jvb-vue-icon'
  const name = type === 'component' ? 'JvbVue' : 'JvbVueIcon'

  return {
    mode: 'production',
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      rollupOptions: {
        external: 'vue',
        output: [
          {
            format: 'umd',
            entryFileNames: `${entryFileName}.js`,
            globals: {
              vue: 'Vue',
            },
          },
          {
            format: 'umd',
            entryFileNames: `${entryFileName}.min.js`,
            globals: {
              vue: 'Vue',
            },
            plugins: [terser() as any],
          },
        ],
      },
      // 开启lib模式
      lib: {
        entry,
        formats: ['umd'],
        name,
      },
    },
    // @ts-ignore vite内部类型错误
    plugins: [vue(), vueJsx()],
  }
}
