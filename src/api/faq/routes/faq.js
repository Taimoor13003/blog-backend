module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/faqs',
      handler: 'faq.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/faqs',
      handler: 'faq.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/faqs',
      handler: 'faq.delete',
      config: { policies: [] }
    }
  ]
}