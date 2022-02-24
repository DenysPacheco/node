import express from 'express'
// import path from 'path'
import start from './routes/routes'

const app = express()
// app.set('view engine', 'pug')
// app.engine('html', require('ejs').renderFile)
const port = process.env.PORT || 3000

start(app)

app.listen(port, () => console.log(`Server listening on port ${port}...`))
