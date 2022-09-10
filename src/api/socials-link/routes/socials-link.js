module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/socials-links',
      handler: 'socials-link.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/socials-links',
      handler: 'socials-link.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/socials-links',
      handler: 'socials-link.delete',
      config: { policies: [] }
    }
  ]
}