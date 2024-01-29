const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);

app.get("/api/fortune", controller.getFortune);

app.get("/api/motivated", controller.getMotivated);

app.get("/api/date", controller.getDate);

app.get("/api/time", controller.getTimeNow);

app.listen(4000, () => console.log("Server running on 4000"));
