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
      { text: '日常笔记', link: '/notes/' },
    ],
    sidebar: {
      '/notes/': [
        '/notes/',
        {
          title: '基础',
          collapsable: true,
          children: [
            '/notes/base/从URL输入到页面显示中间做了什么.md',
          ]
        },
        {
          title: 'Vue',
          collapsable: true,
          children: [
            '/notes/vue/生命周期及使用场景',
            '/notes/vue/Vue.use()中做什么'
          ]
        },
        {
          title: 'Docker',
          collapsable: true,
          children: [
            '/notes/docker/安装',
            '/notes/docker/常用命令'
          ]
        },
        {
          title: 'Nginx',
          collapsable: true,
          children: [
            '/notes/nginx/安装',
          ]
        },
      ],
    }
  }
}
