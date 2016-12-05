import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

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

  app.use(express.static(path.join(__dirname,'../../dist')))
  app.get('*',(req,res,next)=>res.sendFile(path.join(__dirname,'../../dist/index.html')))

  return app
}
