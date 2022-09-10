module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/gallery',
      handler: 'gallery.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/gallery',
      handler: 'gallery.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/gallery',
      handler: 'gallery.delete',
      config: { policies: [] }
    }
  ]
}