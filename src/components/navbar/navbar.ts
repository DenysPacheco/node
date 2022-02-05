import express from 'express'
const path = require('path')

const router = express.Router()


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    // res.send('New component added!')
    res.sendFile(path.join(__dirname + '/index.html'))
})

module.exports = router