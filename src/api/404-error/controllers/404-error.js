const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::404-error.404-error');