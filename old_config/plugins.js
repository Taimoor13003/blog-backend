// Update here your cloudinary access credential here

module.exports = ({ env }) => ({
    upload: {
        provider: "cloudinary",
        providerOptions: {
            cloud_name: "taimoorblogapplication",
            api_key: "928243826895886",
            api_secret: "tZCkA28bClbcAM7v24127vMItXM",
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