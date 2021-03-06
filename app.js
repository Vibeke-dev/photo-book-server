require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes/index");
app.use("/", allRoutes);

const pictureRouter = require("./routes/picture.routes");
app.use("/api", pictureRouter); 

const bookRouter = require("./routes/book.routes");
app.use("/api", isAuthenticated, bookRouter);

const userRouter = require("./routes/user.routes");
app.use("/api", isAuthenticated, userRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);  

require("./error-handling")(app);

module.exports = app;
