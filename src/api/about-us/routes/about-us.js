module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/about-us',
      handler: 'about-us.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/about-us',
      handler: 'about-us.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/about-us',
      handler: 'about-us.delete',
      config: { policies: [] }
    }
  ]
}