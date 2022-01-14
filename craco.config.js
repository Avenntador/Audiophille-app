module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                    @import "src/sass/_variables.scss";
                    @import "src/sass/_reset.scss";
                    @import "src/sass/_typography.scss";
                    @import "src/sass/_mixins.scss";
                `,
            },
        },
    },
};