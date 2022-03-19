import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Olá Mundo')
})

const port = 5000

app.listen(port, () => {
    console.log(`API rodando na porta ${port} na tranquilidade`)
})