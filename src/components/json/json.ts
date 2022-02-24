import express from 'express'
// import path from 'path'
import json from './object.json'

const router = express.Router()

router.get('/', (req, res) => {
    // res.send('New component added!')
    res.json(json)
})

export default router
