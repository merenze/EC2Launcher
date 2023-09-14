const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

module.exports = yaml.load(fs.readFileSync(path.join(__dirname, "/../../config.yml")));