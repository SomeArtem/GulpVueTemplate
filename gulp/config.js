const srcPath = "src";
const destPath = "dist";

const config = {
    src: {
        root: srcPath,
        sass: `${srcPath}/scss`,
        js: `${srcPath}/js`,
        fonts: `${srcPath}/assets/fonts`,
        images: `${srcPath}/assets/images`,
        iconsMono: `${srcPath}/assets/icons/mono`,
        iconsMulti: `${srcPath}/assets/icons/multi`,
    },

    dest: {
        root: destPath,
        html: destPath,
        css: `${destPath}/css`,
        js: `${destPath}/js`,
        fonts: `${destPath}/fonts`,
        images: `${destPath}/images`,
    },

    setEnv() {
        this.isProd = process.argv.includes("--prod");
        this.isDev = !this.isProd;
    },
};

export default config;
