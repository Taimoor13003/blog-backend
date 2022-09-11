// Update here your cloudinary access credential here

module.exports = ({ env }) => ({
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
});

// module.exports = ({ env }) => ({
//     upload: {
//         provider: "cloudinary",
//         providerOptions: {
//             cloud_name: "...",
//             api_key: "...",
//             api_secret: "...",
//         },
//     },
// });