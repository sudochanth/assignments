const express = require('express');
const app = express();
const port = 7001;

//middleware
// express.json converts to json and back and forth
app.use(express.json());
app.use('/people', require('./PeopleRouter'));

app.listen(port, () => {
  console.log(`success. ${port} is running`)
});

// app.use('/people', require('./PeopleRouter'))

// mongoose.connect('mongodb://localhost:27017/People', {userNewUrlParser: true}).then(() => {
//   console.log('connected to MongoDB')
// })


// // request is info you're sending with the request
// // GET all
// app.get('/people', (request, response) => {
//   response.send({data});
// });

// // GET one
// app.get('/people:_id', (request, response) => {
//   const { id } = request.params;
//   const found = data.find(item => {
//     if(item._id === _id) {
//       response.send(found)
//     } else {
//       response.send('not found')
//     }
//   })
// })
// app.post('/people', (request, response) => {
//   // console.log(request.body);
//   const newObj = request.body;
//   newObj._id = uuid.v4();
//   data.push(newObj);
//   response.send(newObj);
// });

// app.delete('/people/:_id', (request, response) => {
//   const { _id } = request.params;
//   const index = data.findIndex(item => item._id === _id);
//   data.splice(index, 1);
//   response.send("item removed")
// });

// app.put('/people/:_id', (request, response) => {
//   const updatedObj = request.body;
//   const { _id } = request.params;
//   data.forEach(item => {
//     if (item._id === _id) {
//       item = Object.assign(item, updatedObj);
//     }
//   })
//   response.send(data);
// });

