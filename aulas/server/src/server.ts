import express from 'express';

const app =  express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Executando primeira rota")
})

app.listen(3333, () => console.log('Rodando na porta 3333'));