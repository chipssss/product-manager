// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/dashboard',
    icon: 'home',
  },
  {
    name: '退出登录',
    path: '/',
  }
];

// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '数据展示',
    path: '/',
    icon: 'home',
    children: [
      {
        name: '数据概况',
        path: '/dashboard',
      },
    ],
  },
  {
    name: '用户管理',
    path: '/account',
    icon: 'cascades',
    children: [
      { name: '用户列表', path: '/account/list' },
      { name: '用户审核', path: '/account/audit' },
    ],
  },
  {
    name: '产品管理',
    path: '/product',
    icon: 'shezhi',
    children: [
      { name: '产品列表', path: '/product/list' }
    ],
  }
];

export { headerMenuConfig, asideMenuConfig };
