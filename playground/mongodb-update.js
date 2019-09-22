//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongo db server.')
    }
    console.log('Connected to mongo db server.')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5d87459d6d7160c058d85050")
    }, {
        $set:{
            completed: true
        }        
    }, {
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    });

    //db.close();
});