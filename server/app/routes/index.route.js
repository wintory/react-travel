import { render, api } from '../controller/index.controller'

export default (app) => {
  app.get('/view',render)
  app.get('/api',api)
}
