const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

const RELEASE = process.env.APP_REVISION || "Undefined release";

app.use(express.static("dist"));

app.get("/health", (req, res) => {
    throw "error";
    //res.send("ok");
})

app.get('/version', (req, res) => {
    res.send(`${RELEASE}`)
})

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
