export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe37ba2e4c1ead1399d8f80',
                  title: 'Sanity Studio',
                  name: 'adaptia-web-studio',
                  apiId: 'c4f87f96-e352-4bc6-8251-81d7ac6a598f'
                },
                {
                  buildHookId: '5fe37ba2e8a4d58a9efe434a',
                  title: 'Blog Website',
                  name: 'adaptia-web',
                  apiId: '9df1ad61-2248-44e2-a455-99ee2d8e5e28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sananes/adaptia-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://adaptia-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
