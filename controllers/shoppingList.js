import { v4 as uuidv4 } from 'uuid';  // v4 is the version of uuid

const list = [];

export const getShoppingList = (req, res) => {
  res.send(list);
}

export const getItem = (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  res.send(item);
}

export const addItem = (req, res) => {
  const newItem = { name: req.params.name, id: uuidv4() };
  list.push(newItem);
  res.send(`Item ${newItem.name} added to the list.`);
}

export const deleteItem = (req, res) => {
  const itemToDelete = list.find(item => item.id === req.params.id);
  list.splice(list.indexOf(itemToDelete), 1);
  res.send(`Item ${itemToDelete.name} deleted from the list.`);
}

export const updateItem = (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  if (req.body.name) {
    item.name = req.body.name;
    res.send(`Item updated to ${item.name}.`);
  } else { res.send("No item found."); }
}