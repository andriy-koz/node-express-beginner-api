import express from "express";

import { getItem, getItems, addItem, deleteItem, updateItem } from "../controllers/otherList.js";

const router = express.Router();

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/:name", addItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

export default router;

