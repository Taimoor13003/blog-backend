module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/top-header',
      handler: 'top-header.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/top-header',
      handler: 'top-header.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/top-header',
      handler: 'top-header.delete',
      config: { policies: [] }
    }
  ]
}