import { render, api, getButton, getDetail } from '../controller/index.controller'

export default (app) => {
  app.get('/view',render)
  app.get('/api',api)
  app.get('/button',getButton)
  app.get('/detail/:province',getDetail)
}
 
