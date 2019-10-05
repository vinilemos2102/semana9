const express = require('express');

const mongoose = require ('mongoose');

const routes = require ('./routes');



mongoose.connect('mongodb://vini:vini@cluster0-shard-00-00-7ap9z.mongodb.net:27017,cluster0-shard-00-01-7ap9z.mongodb.net:27017,cluster0-shard-00-02-7ap9z.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
  

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);