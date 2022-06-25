import { v4 as uuidv4 } from 'uuid';  // v4 is the version of uuid

const list = [];

const getItems = (req, res) => {
  res.send(list);
};

const getItem = (req, res) => {
  res.send(list.find(item => item.id === req.params.id));
};

const addItem = (req, res) => {
  list.push({ name: req.body.name, id: uuidv4() });
  res.send(`Item ${req.body.name} added to the list.`);
};

const removeItem = (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  list.splice(list.indexOf(item), 1);
  res.send(`Item ${item.name} removed from the list.`)
};

const updateItem = (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  const { name } = req.body;

  if (name) {
    item.name = name;
  }

  res.send('Item updated.');
};

export { getItems, getItem, addItem, removeItem, updateItem };

