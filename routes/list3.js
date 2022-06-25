import express from "express";
import { getItems, getItem, addItem, removeItem, updateItem } from "../controllers/list3.js";

const router = express.Router();

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", addItem);

router.delete("/:id", removeItem);

router.patch("/:id", updateItem);

export default router;
