const port = process.env.PORT || 1337

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', port),
  proxy: true,
  url: env('MY_HEROKU_URL'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6cd7f88062629a1d0108aef1d2d382ff'),
    },
  },
});