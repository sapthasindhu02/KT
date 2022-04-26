import "reflect-metadata"
import express from 'express'
import bodyParser from 'body-parser'
import {RegisterRoutes} from './routes/routes'
// controllers need to be referenced in order to get crawled by the generator
import './controllers/usersControllers'

const app = express()
app.use('/docs', express.static(__dirname + '/swagger-ui'))
app.use('/swagger.json', (req, res) => {
  res.sendFile(__dirname + '/swagger.json')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

RegisterRoutes(app)

// catch 404 and forward to error handler
app.use(function (req:any, res:any, next:any) {
  let err = new NotFoundError()
  next(err)
})

// error handlers
app.use(function (err:any, req:any, res:any, next:any) {
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  })
})

app.listen(3000,()=>{console.log("Connection established on port no 3000 go to http://localhost:3000");
})