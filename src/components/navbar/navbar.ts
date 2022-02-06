import express from 'express'
import path from 'path'

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    // res.send('New component added!')
    res.sendFile(path.join(__dirname, '/index.html'))
})

export default router
