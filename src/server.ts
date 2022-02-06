import express from 'express'
import path from 'path'
import router from './routes/routes'
import navbar from './components/navbar/navbar'

const app = express()
const port = 3000

app.use('/birds', router)
app.use('/navbar', navbar)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/index.html'))
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
