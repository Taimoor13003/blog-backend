// Update here your pgAdmin access credential here & project database name

const parse = require('pg-connection-string').parse;
const config = parse(  process.env.NODE_ENV === 'production' ?  
process.env.DATABASE_URL : process.env.LOCAL_DATABASE_URL);
console.log(config, "parseeeeeeee")
 
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', config.host),
      port: env.int('DATABASE_PORT', config.port),
      database: env('DATABASE_NAME', config.database),
      user: env('DATABASE_USERNAME', config.user),
      password: env('DATABASE_PASSWORD', config.password),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not Required
      // ssl: env.bool('DATABASE_SSL', false),
      ssl: {
        require: true,
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
  settings: {
    forceMigration: false,
  }
});
