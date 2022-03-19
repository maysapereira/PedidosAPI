import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Olá Mundo')
})

const port = 5000

app.listen(port, () => {
    console.log(`API rodando na porta ${port} na tranquilidade`)
})