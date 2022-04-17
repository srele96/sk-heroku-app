const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

const data = {
  items: [
    {
      id: 1,
      name: 'Item 1',
      price: 10,
      quantity: 1,
      description: 'Item 1 description',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 20,
      quantity: 2,
      description: 'Item 2 description',
    },
    {
      id: 3,
      name: 'Item 3',
      price: 30,
      quantity: 3,
      description: 'Item 3 description',
    },
    {
      id: 4,
      name: 'Item 4',
      price: 40,
      quantity: 4,
      description: 'Item 4 description',
    },
    {
      id: 5,
      name: 'Item 5',
      price: 50,
      quantity: 5,
      description: 'Item 5 description',
    },
    {
      id: 6,
      name: 'Item 6',
      price: 60,
      quantity: 6,
      description: 'Item 6 description',
    },
  ],
};

app.get('/', (req, res) => {
  res.render('index', { data: data });
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}

app.listen(port);
