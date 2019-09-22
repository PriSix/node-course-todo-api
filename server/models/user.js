var mongoose = require('mongoose')
var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

module.exports.User = User

// var user = new User({
//     email: 'pruteshdq@gmail.com'
// });

// user.save().then((doc) =>{
//     console.log('Saved user: ', doc)
// }, (err) =>{
//     console.log('Unable to save user.', err)
// })