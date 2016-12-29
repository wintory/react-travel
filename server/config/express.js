import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import jade from 'jade'
import indexRoute from '../app/routes/index.route'

console.log(indexRoute)

export default () => {
  const app = express()

  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
  }else{
    app.use(compression())
  }
  app.use(cors())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.set('views',path.join(__dirname,'../app/views/'))
  app.set('view engine','jade')

  indexRoute(app)

  app.use(express.static(path.join(__dirname,'../../dist')))

  return app
}
