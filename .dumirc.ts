import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  themeConfig: {
    name: 'tarofly-ui',
  },
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
    docDirs: ['docs', 'src/components'],
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'hooks', dir: 'src/hooks' },
    ],
  },
});
