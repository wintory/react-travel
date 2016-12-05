import express from './config/express.js'

const port = 3000
const app = express()

app.listen(3000,()=>console.log(`application running on http://localhost:${port}`))
