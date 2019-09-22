//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongo db server.')
    }
    console.log('Connected to mongo db server.')

//   db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
//       console.log(result)
//   })

//   db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
//     console.log(result)
// })

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//     console.log(result)
// })

db.collection('Users').deleteMany({name: 'Pritesh'})
// db.collection('Users').findOneAndDelete({
//     _id: new ObjectId("5d8520ff04de803cf02478d6")
// }).then((result) =>{
//     console.log(result)
// })

    //db.close();
});