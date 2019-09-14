const mongoose = require('mongoose')

const required = true

const ProfileSchema = new mongoose.Schema({
  _id: { type: String, required },
  firstName: { type: String, required },
  lastName: { type: String, required },
  accountType: {
    type: String,
    enum:  ['Law', 'EMS', 'Health', 'Fire', 'Public'],
    required
  },
  phoneNumber: { type: String, required },
  isNumberVerified: { type: Boolean, default: false },
  email: {
    type: String,
    validate: {
      validator: email => {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        return emailRegex.test(email);
      },
      message: props => `${props.value} is not a valid ${props.path}!`
    },
  },
  topGames: { type: [String] }, // TODO: validate the strings are actual games
  communityRadius: {
    type: Number,
    min: [15, 'Community Radius must be larger than 15'],
    max: [100, 'Community Radius must be smaller than 100'],
    default: 30,
  }
})

module.exports = mongoose.model('Profile', ProfileSchema)
