const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const companyMiddlewareRoute = require("./routes/company");

const app = express();

dotenv.config();

connectDB();

const Port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/api/company", companyMiddlewareRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});