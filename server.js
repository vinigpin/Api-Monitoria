const express = require('express');

const app = express();
const PORT = 3000;

const rafael = {
    nome: "rafael",
    idade: 27,
    fruta: "caju"
}


app.get(`/`, (req, res) => {
    res.send("Hello world!");
});

app.get(`/caju`, (req, res) => {
    res.send("Eu gosto de caju!");
});

app.get(`/pegarUsuario`, (req, res) => {
    res.send(rafael);
});


app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
})