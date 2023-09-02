const {readFileSync, writeFileSync} = require("fs");
const uglify = require("uglify-js");

writeFileSync(__dirname + "/../index.min.js", uglify.minify(readFileSync(__dirname + "/../index.js", "utf8")).code);
writeFileSync(__dirname + "/../index.min.d.ts", readFileSync(__dirname + "/../index.d.ts", "utf8")
    .replaceAll(/[\n\t\v\r]/g, "")
    .replaceAll(/\s*([:(){}<>]|=>)\s*/g, m => m.trim())
);