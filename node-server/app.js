const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const dbLogger = require('easy-log')('app:db')
const infoLogger = require('easy-log')('app:info')
const schema = require('./graphql')

mongoose.connect(`mongodb://root:root123!@ds359077.mlab.com:59077/ims-hack`)
mongoose.connection.once('open', () => {
  dbLogger(`Connected to mongodb`)
})

const app = express()

app.use('/graphql', (req, res, next) => {
  infoLogger('req on /graphql')
  next()
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

module.exports = app
