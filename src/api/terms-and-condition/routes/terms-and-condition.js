module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/terms-and-conditions',
      handler: 'terms-and-condition.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/terms-and-conditions',
      handler: 'terms-and-condition.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/terms-and-conditions',
      handler: 'terms-and-condition.delete',
      config: { policies: [] }
    }
  ]
}