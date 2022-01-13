module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                    @import "src/sass/_variables.scss";
                `,
            },
        },
    },
};