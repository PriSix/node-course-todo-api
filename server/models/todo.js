var mongoose = require('mongoose')
var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports.Todo = Todo


// var newTodo = new Todo({
//     text: ' Something to do '
// });

// newTodo.save().then((doc) =>{
//     console.log('Saved todo: ', doc)
// }, (err) =>{
//     console.log('Unable to save todo.', err)
// })