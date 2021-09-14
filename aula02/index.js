const express = require('express');
const app = express();

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
})

//Rota home: query param
app.get('/home', (req, res) => {''

    const nome = req.query.nome;

    res.send(`Seja bem vindo ${nome}!`);
})

//Rota profile:
app.get('/profile/:username', (req, res) => {''

    const username = req.params.username;

    res.send(`Seja bem vindo ${nome}!`);
})

app.listen(3000, () => {
    console.log('Executando na porta 3000');
});