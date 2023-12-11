const mongoose = require("mongoose");
const DATABASE_URL = "mongodb://127.0.0.1/Coachmate";
mongoose
  .connect(DATABASE_URL, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("Connect db successfully"))
  .catch((err) => console.log("Error: ", err));
