const fs = require("fs");
const express = require("express");
const convert = require("./convert");

const app = express();

app.get("/", convert);

const port = process.env.LISTEN_PORT;
const path = process.env.LISTEN_PATH;
if (fs.existsSync(path)) {
    fs.unlinkSync(path);
}

app.listen(port || path || 3000);
