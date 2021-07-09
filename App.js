const App = {
  
    template: '#app-template',
    
    data: () => ({
  
      time: '23:08',
  
      filterlist: ['Uber', 'Bosch', 'Adidas'],
  
      values: ['Uber', 'Bosch', 'Adidas'],
  
      items: [
        
        {
          items: [{ title: '- Item' }],
          title: 'PROJECTS',
        },
        {
          items: [{ title: '- Item' }],
          title: 'TASKS',
        },
        {
          active: true,
          items: [
            { title: " - Documentation" },
            { title: ' - Style Guide' },
            { title: " - UI's" },
          ],
          title: 'BOARDS',
        },
        {
          items: [{ title: '- Item' }],
          title: 'TEAMS',
        },
        {
          items: [{ title: '- Item' }],
          title: 'CLIENTS',
        },
        {
          items: [{ title: '- Item' }],
          title: 'SETTINGS',
        },
      ],
    }),
  }
  
  new Vue({
    vuetify: new Vuetify(),
    render: h => h(App), 
  }).$mount('#app')