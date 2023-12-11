const express = require("express");
const app = express();
const cors = require("cors");
const coach = require("../routes/coach");
const admin = require("../routes/admin");
const login = require("../routes/login");
const attendence = require("../routes/attendence");
const program = require("../routes/program");
const feedback = require("../routes/feedback");

const conn = require("../database/conn");

const PORT = 5000; // Port number you want to use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/coach", coach);
app.use("/admin", admin);
app.use("/login", login);
app.use("/attendence", attendence);
app.use("/program", program);
app.use("/feedback", feedback);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
