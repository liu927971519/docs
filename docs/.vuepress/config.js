module.exports = {
  title: 'Code-Friend', // 设置网站标题
  description: '日常学习笔记',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基础系列', link: '/base/' },
      { text: '框架系列', link: '/frame/' },
      { text: '工具系列', link: '/utils/' },
      { text: '更多', items: [
          {
            text: '前端',
            link: '/web/'
          },
          {
            text: '后端',
            link: '/node/'
          },
          {
            text: '工具使用',
            link: '/utils/'
          },
        ]},
      { text: 'Github', link: 'https://github.com/liu927971519/docs' }
    ],
    sidebar: {
      '/node/': [
        {
          title: '后端教程',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/utils/': [
        {
          title: '常用工具使用教程',
          collapsable: false,
          children: [
            'docker/',
            'nginx/'
          ]
        }
      ]
    }
  }
}
