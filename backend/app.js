const express = require('express');
const app = express();
const emailRouter = require("./router/EmailRoute.js");
const authRouter = require('./router/authRoute.js');
const databaseconnect = require('./config/databaseConfig.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// connect to db
databaseconnect();

app.use(express.json()); // Built-in middleware
app.use(cookieParser()); // Third-party middleware

// app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true })); //Third-party middleware
app.use(cors({ origin: "https://collect-your-gamingtools.netlify.app", credentials: true }));


// Auth router
app.use('/auth', authRouter);
app.use("/email", emailRouter);
app.use('/', (req, res) => {
  res.status(200).json({ data: 'JWTauth server ;)' });
});

module.exports = app;
