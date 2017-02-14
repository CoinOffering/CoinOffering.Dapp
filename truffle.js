module.exports = {
    build: {
        "index.html": "index.html",
        "app.js": [
            "js/app.js",
            // https://github.com/yaru22/angular-md
            "bower_components/angular-md/dist/angular-md.min.js",
            // https://github.com/chjj/marked
            "bower_components/marked/lib/marked.js",
            // https://github.com/VictorBjelkholm/ngProgress
            "bower_components/ngprogress/build/ngprogress.min.js",
            //
            "js/homeCtrl.js",
            "js/smartContractCtrl.js",
            "js/directives.js"
        ],
        "app.css": [
            "css/app.css",
            "bower_components/ngprogress/ngProgress.css"
        ],
        "img/": "img/",
        "views/": "views/"
    },
    rpc: {
        host: "localhost",
        port: 8545
    }
};
