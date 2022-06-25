import express from 'express';
import { getShoppingList, getItem, addItem, deleteItem, updateItem } from '../controllers/shoppingList.js';

const router = express.Router();

router.get("/", getShoppingList);
router.get("/:id", getItem);
router.post("/:name", addItem);
router.delete("/:id", deleteItem);
router.patch("/:id", updateItem);


export default router;