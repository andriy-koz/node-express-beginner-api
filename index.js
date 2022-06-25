import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
import shoppingListRoutes from "./routes/shoppingList.js";
import otherListRoutes from "./routes/otherList.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.use("/shoppingList", shoppingListRoutes);

app.use("/otherList", otherListRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage."));

app.listen(PORT, () => { console.log(`Server is running at port http://localhost:${PORT}`) });