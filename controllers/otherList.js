import { v4 as uuidv4 } from 'uuid';  // v4 is the version of uuid }

let list = [];

export const getItems = (req, res) => {
  res.send(list);
}

export const getItem = (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  res.send(item);
};

export const addItem = (req, res) => {
  const newItem = { name: req.params.name, id: uuidv4() };
  list.push(newItem);
  res.send(newItem);
  console.log(`Item ${newItem.name} added to the list.`);
};

export const deleteItem = (req, res) => {
  list = list.filter(item => item.id !== req.params.id);
  res.send(`Item ${req.params.id} deleted from the list.`);
};

export const updateItem = (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  if (req.body.name) {
    item.name = req.body.name;
  }
  res.send(`Item ${item.name} was updated`);
};