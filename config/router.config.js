export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/Home', authority: ['admin', 'user'] },
      {
        path: '/Home',
        name: '首页',
        icon: 'apartment',
        component: './Home/index',
      },
      {
        path: '/UserRegisterInfo',
        name: '核酸检测预约',
        icon: 'apartment',
        component: './UserRegisterInfo/index',
      },
      {
        path: '/AppointmentRecord',
        name: '预约记录',
        icon: 'apartment',
        component: './AppointmentRecord/index',
      },
      {
        path: '/ReportQuery',
        name: '报告查询',
        icon: 'apartment',
        component: './ReportQuery/index',
      },
      {
        path: '/SampleCollection',
        name: '检验样品采集',
        icon: 'apartment',
        component: './SampleCollection/index',
      },
      {
        path: '/Management',
        name: '单位预约管理',
        icon: 'apartment',
        component: './Management/index',
      },
      {
        path: '/ResultEntry',
        name: '结果录入',
        icon: 'apartment',
        component: './ResultEntry/index',
      },
      {
        path: '/ResultReview',
        name: '结果复核',
        icon: 'apartment',
        component: './ResultReview/index',
      },
      {
        path: '/InstitutionalInformation',
        name: '排班管理',
        icon: 'apartment',
        component: './InstitutionalInformation/WorkforceManagement',
      },
      {
        path: '/Organization',
        name: '检验机构人员',
        icon: 'apartment',
        component: './Organization/index',
      },
      {
        path: '/Registration',
        name: '注册单位审核',
        icon: 'apartment',
        component: './Registration/index',
      },
      {
        path: '/OrganizaManagement',
        name: '检测机构管理',
        icon: 'apartment',
        component: './OrganizaManagement/index',
      },
      {
        path: '/Statistics/index',
        name: '统计分析',
        icon: 'apartment',
        component: './Statistics/index',
      },
      {
        path: '/Register',
        name: '预约详情',
        icon: 'apartment',
        component: './Register/index',
      },
      {
        path: '/SystemManger',
        name: '系统管理',
        icon: 'setting',
        routes: [
          {
            path: '/SystemManger/Role/index',
            name: '角色管理',
            component: './SystemManger/Role/index',
          },
          {
            path: '/SystemManger/AdminUser/index',
            name: '后台用户管理',
            component: './SystemManger/AdminUser/index',
          },
          {
            path: '/SystemManger/DataDictionary/index',
            name: '数据字典',
            component: './SystemManger/DataDictionary/index',
          },
          {
            path: '/SystemManger/Log/index',
            name: '日志管理',
            component: './SystemManger/Log/index',
          }
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: '无访问权限',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: '页面不存在',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: '服务器错误',
            component: './Exception/500',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
