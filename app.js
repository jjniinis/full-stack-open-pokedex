const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

const RELEASE = process.env.APP_REVISION || "Undefined release";

app.use(express.static("dist"));

// for CI/CD health check
app.get("/health", (req, res) => {
    res.send("ok");
})

// shows the Git hash of deployed version
app.get('/version', (req, res) => {
    res.send(`${RELEASE}`)
})

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
