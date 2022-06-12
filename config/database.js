// Update here your pgAdmin access credential here & project database name


const parse = require('pg-connection-string').parse;
const config = parse(process.env.PRODUCTION_DATABASE_URL);
// const config = parse(process.env.LOCAL_DATABASE_URL);
console.log(parse, "parseeeeeeee")
console.log(process.env.PRODUCTION_DATABASE_URL, "parseeeeeeee")
console.log(config, "parseeeeeeee")


module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
        connector: 'bookshelf',
        settings: {
            // client: 'postgres',
            client: 'postgresql',
            host: env('DATABASE_HOST', config.host),
            port: env.int('DATABASE_PORT', config.port),
            database: env('DATABASE_NAME', config.database),
            username: env('DATABASE_USERNAME', config.user),
            password: env('DATABASE_PASSWORD', config.password),
            ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
        },
    },
});
//postgres://swrieezqitolnk:ba0faa7700146563fd290021be5671f1f42e8683f51aa143eed10772e97731fa@ec2-34-230-153-41.compute-1.amazonaws.com:5432/dddhrtvjq3p1bn
// module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//         default: {
//         connector: process.env.DB_LOCAL_CONNECTOR,
//         settings: {
//             client: process.env.DB_LOCAL_CLIENT,
//             host: env('DATABASE_HOST', process.env.DB_LOCAL_HOST),
//             port: env.int('DATABASE_PORT', process.env.DB_LOCAL_PORT),
//             database: env('DATABASE_NAME', process.env.DB_LOCAL_DATABASE),
//             username: env('DATABASE_USERNAME', process.env.DB_LOCAL_USERNAME),
//             password: env('DATABASE_PASSWORD', process.env.DB_LOCAL_PASSWORD),
//             ssl: env.bool('DATABASE_SSL', process.env.DB_LOCAL_SSL === "true"),
//         },
//         options: {}
//         },
//     },
// });
// module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//         default: {
//         connector: process.env.DB_PRODUCTION_CONNECTOR,
//         settings: {
//             client: process.env.DB_PRODUCTION_CLIENT,
//             host: env('DATABASE_HOST', process.env.DB_PRODUCTION_HOST),
//             port: env.int('DATABASE_PORT', process.env.DB_PRODUCTION_PORT),
//             database: env('DATABASE_NAME', process.env.DB_PRODUCTION_DATABASE),
//             username: env('DATABASE_USERNAME', process.env.DB_PRODUCTION_USERNAME),
//             password: env('DATABASE_PASSWORD', process.env.DB_PRODUCTION_PASSWORD),
//             ssl: env.bool('DATABASE_SSL', process.env.DB_PRODUCTION_SSL === "true"),
//         },
//         options: {}
//         },
//     },
// });
// module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//         default: {
//         connector: 'bookshelf',
//         settings: {
//             client: 'postgres',
//             host: env('DATABASE_HOST', '127.0.0.1'),
//             port: env.int('DATABASE_PORT', 5432),
//             database: env('DATABASE_NAME', 'tozi'),
//             username: env('DATABASE_USERNAME', '...'),
//             password: env('DATABASE_PASSWORD', '...'),
//             ssl: env.bool('DATABASE_SSL', false),
//         },
//         options: {}
//         },
//     },
// });