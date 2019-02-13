module.exports = {
  title: 'Code-Friend', // 设置网站标题
  description: '种一棵树最好的时间是十年前，其次就是现在。',
  themeConfig: {
    markdown: {
      lineNumbers: true // 代码行数
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '基础系列', link: '/base/' },
      { text: '框架系列', link: '/frame/' },
      { text: '工具系列', link: '/utils/' },
      { text: '更多', link: '/more/' },
      { text: 'Github', link: 'https://github.com/liu927971519/docs' }
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
