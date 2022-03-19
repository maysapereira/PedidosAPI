// import bodyParser from 'body-parser'

const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('Oi gente fina')) 
}