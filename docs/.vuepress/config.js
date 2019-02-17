module.exports = {
  title: 'Code-Friend', // 设置网站标题
  description: '种一棵树最好的时间是十年前，其次就是现在。',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  themeConfig: {
    repo: 'liu927971519/docs',
    docsBranch: 'master', // git 源仓库 仓库分支
    docsDir: 'docs', // 仓库下的文件夹
    editLinks: true, // 编辑链接
    editLinkText: '改善文档', // 链接字段
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    markdown: {
      lineNumbers: true // 代码行数
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '基础系列', link: '/base/' },
      { text: '框架系列', link: '/frame/' },
      { text: '工具系列', link: '/utils/' },
    ],
    sidebar: {
      '/utils/': [
        '/utils/',
        {
          title: 'Docker',
          collapsable: true,
          children: [
            '/utils/docker/安装',
            '/utils/docker/常用指令'
          ]
        },
        {
          title: 'Nginx',
          collapsable: true,
          children: [
            '/utils/nginx/安装',
          ]
        }
      ]
    }
  }
}
