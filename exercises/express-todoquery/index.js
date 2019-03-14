const express = require('express');
const app = express();
const uuid = require('uuid');
app.use(express.json());
const data = require('./Data');

const port = 7005;

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});

``
// Create GET all
app.get('/inventory', (request, response) => {
  let { type, brand, price } = request.query;
  if(price && brand) {
    const priceBrand = data.filter(item => item.price === item.price < price && brand)
    response.send(priceBrand)
  } else if (price) {
    const price = data.filter(item => item.price < price)
    response.send(price)
  } else if (brand) {
    const brand = data.filter(item => item.brand === brand)
    response.send(brand)
  } else if (type) {
    const type = data.filter(item => item.type === type)
    response.send(type)
  } else {
    response.send(data)
  }
})

// Create POST
app.post('/inventory', (request, response) => {
  const newObj = request.body;
  newObj.id = uuid.v4();
  data.push(newObj);
  response.send(newObj)
})

// Create DELETE
app.delete('/inventory/:id', (request, response) => {
  console.log(request.params)
  const { id } = request.params;
  const objIndex = data.findIndex(item => item.id === id);
  data.splice(objIndex, 1);
  response.send('item deleted')
})

// Create GET for one object
app.get('/inventory/:id', (request, response) => {
  const { id } = request.params;
  const found = data.find(item => item.id === id);
  found ? response.send(found) : response.send('item not found')
})

// Create PUT
app.put('/inventory/:id', (request, response) => {
  const { id } = request.params;
  const updatedObj = request.body;
  data.forEach(item => {
    if (item.id === id) {
      item = Object.assign(item, updatedObj)
    }
  })
  response.send(data)
})