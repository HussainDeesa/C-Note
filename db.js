const mongoose = require('mongoose')
// const mongoURi = 'mongodb://localhost:27017/CNote?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const username = encodeURIComponent("Hussain");
const password = encodeURIComponent("Hussain@7860");
const mongoURi = `mongodb+srv://${username}:${password}@cluster0.qv5zj.mongodb.net/test`
const connectToMongo = () => {
    mongoose.connect(mongoURi, {
        userNewUrlPaser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=>{
        console.log('connected to mongo successfully');
    }) .catch((e) => {
        console.log('not connected');
      });

}

module.exports = connectToMongo