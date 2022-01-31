const { Schema, model } = require('mongoose')

const User = new Schema({
  username: String,
  email: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, { timestamps: true })
console.log(user)
User.plugin(require('passport-local-mongoose'));

module.exports = model('User', User)


