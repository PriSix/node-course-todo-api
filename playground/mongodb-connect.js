//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err)
    {
        return console.log('Unable to connect to mongo db server.')
    }
    console.log('Connected to mongo db server.')


    // db.collection('Todos').find({
    //     _id: new ObjectID('5d8524ef6d7160c058d8504b')
    // }).toArray().then((docs)=>{
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name:'Pritesh'}).toArray().then((docs)=>{
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err)=>{
        console.log('Unable to fetch todos', err)
    })

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count: ',count)        
    }, (err)=>{
        console.log('Unable to fetch todos', err)
    })

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err)
    //         return console.log('Unable to insert todo', err)

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //         name: 'Pritesh',
    //         age: 24,
    //         location: 'Maputo' 
    //     }, (err, result)=>{
    //         if(err)
    //             return console.log('Unable to insert user', err)
    
    //         //console.log(JSON.stringify(result.ops[0]._id, undefined, 2))
    //         console.log(result.ops[0]._id.getTimestamp())
    //     })

    //db.close();
});