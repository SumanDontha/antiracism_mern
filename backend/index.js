import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://admin:admin@cluster0.oohgu.mongodb.net/antiracismDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Orgin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  next()

})

import routes from './src/routes/antiracismRoutes'

routes(app)

app.get('/', (req, res) => 
  res.send(`Node and Express server running on port ${PORT}`)
)

app.listen(PORT, () => console.log(`Your server is running on port ${PORT} `))