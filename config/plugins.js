// // Update here your cloudinary access credential here

// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "cloudinary",
//       providerOptions: {
//         cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_KEY"),
//         api_secret: env("CLOUDINARY_SECRET"),
//       },
//       actionOptions: {
//         upload: {},
//         uploadStream: {},
//         delete: {},
//       },
//     },
//   },
//   gatsby: {
//     enabled: true,
//     headers: {
//       "x-gatsby-cloud-data-source": "@relate-app/gatsby-source-strapi",
//     },
//   },
//   // 'gatsby-preview': {
//   //   enabled : true,
//   //   // resolve : './src/plugins/gatsby-preview'
//   //   resolve : '../src/plugins/gatsby-preview'
//   // },
// });

// // module.exports = ({ env }) => ({
// //     upload: {
// //         provider: "cloudinary",
// //         providerOptions: {
// //             cloud_name: "...",
// //             api_key: "...",
// //             api_secret: "...",
// //         },
// //     },
// // });
