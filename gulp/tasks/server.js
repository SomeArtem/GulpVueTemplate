import browserSync from "browser-sync";
import config from "../config";

const server = (callback) => {
    browserSync.create().init({
        server: {
            baseDir: config.dest.root,
        },
        files: [
            `${config.dest.html}/*.html`,
            `${config.dest.css}/*.css`,
            `${config.dest.js}/*.js`,
            {
                match: [`${config.dest.images}/**/*`],
                fn() {
                    this.reload();
                },
            },
        ],
        open: false,
        notify: false,
        port: 4242,
        ui: {
            port: 2424,
        },
    });
    callback();
};

export default server;
