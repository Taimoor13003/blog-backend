module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/sidebar-modal',
      handler: 'sidebar-modal.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/sidebar-modal',
      handler: 'sidebar-modal.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/sidebar-modal',
      handler: 'sidebar-modal.delete',
      config: { policies: [] }
    }
  ]
}