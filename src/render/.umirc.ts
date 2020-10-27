const path = require('path')
const isWeb = process.env.TARGET === 'web'
const isDev = process.env.APP_ENV === 'development'
const isProd = process.env.APP_ENV === 'production'
const resolvePath = dir => path.join(__dirname, dir)
import defaultSettings from './config/defaultSettings'
import { defineConfig } from 'umi';

const webpack_dev = config => {
  return config
    // .devtool('eval')
    // .devtool('eval-cheap-source-map') // 是否开启sourceMap
    .target('electron-renderer')
}
const webpack_dev_web = config => { // web端运行localhost:9090 一般不用
  return config
    .devtool('eval-cheap-source-map')
    .node
    .set('fs', 'empty')
    .set('worker_threads', 'empty')
    .set('electron', 'empty')
    .set('electron-is-dev', 'empty')
    .set('electron-store', 'empty')
    .set('electron-updater', 'empty')
}
const webpack_prod = config => {
  return config
    .target('electron-renderer')
}

// const chainWebpack = config => {
//   console.log('isProd',isProd)
//   console.log('isWeb',isWeb)

//   if (isProd) {
//     return webpack_prod(config)
//   }
//   return isWeb ? webpack_dev_web(config) : webpack_dev(config)
// }

const chainWebpack = config => {
  return config
    // .devtool('eval')
    // .devtool('eval-cheap-source-map') // 是否开启sourceMap
    .target('electron-renderer')
}

export default defineConfig ({
  chainWebpack, // 热加载需要
  // 是否编译 node_modules
  nodeModulesTransform: { // 打包加速
    type: 'none'
  },
  // 生成资源带 hash 尾缀
  // 开发模式下 umi 会忽略此选项，不然热重载会出问题(很贴心)
  hash: true,
  // url 格式
  history: {
    type: 'hash'
  },
  routes: [
    {
      path: '/',
      component: './../layouts/MyLayout.tsx',
      routes: [
        {
          path: '/',
          redirect: '/manage',
        },
        {
          name: '项目管理',
          path: '/manage',
          component:'./manage'
        },
        // {
        //   name: '预览',
        //   path: '/preview',
        //   component: './preview',
        // },
        // {
        //   name: '新建',
        //   path: '/new-view',
        //   component: './NewView',
        // },
        // {
        //   name: '新建',
        //   path: '/editor',
        //   component: './editor',
        // },
      ],
    },
    // {
    //   component: './404',
    // },
  ],
  // script、link 标签资源引入路径
  publicPath: './',
  // antd 主题配置
  theme: {
    '@primary-color': defaultSettings.primaryColor,
    // '@primary-color': '#A14EFF',
    '@link-color': '#A14EFF',
    '@font-family': '"futura-pt", sans-serif',
    '@line-height-base': '1.3',
    '@border-radius-base': '6px',
    // menu
    'menu-dark-color': '#B6B6B6',
    'menu-dark-danger-color': 'red',
    'menu-dark-bg': '#373E4A',
    // 'menu-dark-arrow-color': '#0f0',
    'menu-dark-submenu-bg': '#2e333d',
    'menu-dark-highlight-color': '#23C132',
    'menu-dark-item-active-bg': '#2e333d',
    'menu-dark-item-active-danger-bg': '#23C132',
  },
  // 路径别名
  alias: {
    '@': resolvePath(''),
    '@components': resolvePath('components'),
    '@config': resolvePath('config'),
    '@utils': resolvePath('utils'),
    '@pages': resolvePath('pages')
  },
})

