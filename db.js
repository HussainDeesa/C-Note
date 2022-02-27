const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');

// const mongoURi = 'mongodb://localhost:27017/CNote?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const username = encodeURIComponent("Hussain");
const password = encodeURIComponent("Hussain@7860");
const mongoURi = `mongodb+srv://${username}:${password}@cluster0.qv5zj.mongodb.net/test`
const connectToMongo = () => {
    mongoose.connect(mongoURi, {
    }).then(()=>{
        console.log('connected to mongo successfully');
    }) .catch((e) => {
        console.log(e,'not connected');
      });

}

// const uri = `mongodb+srv://${username}:${password}@cluster0.qv5zj.mongodb.net/Cluster0?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = connectToMongo