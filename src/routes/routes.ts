import express from 'express'
import index from '../components/index/index'
import birds from '../components/birds/birds'
import about from '../components/about/about'
import items from '../components/items/items'
import json from '../components/json/json'
import { Express } from 'express-serve-static-core'

// const router = express.Router()

// eslint-disable-next-line space-before-function-paren
function start(app: Express): void {
    app.use(express.json())

    app.use('/', index)
    app.use('/birds', birds)
    app.use('/about', about)
    app.use('/items', items)
    app.use('/json', json)
}

export default start
