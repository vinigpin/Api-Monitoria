const express = require('express');

const app = express();
const PORT = 3000;

const usuarios = [
    {
        "nome": "Ana Silva",
        "email": "ana.silva@email.com",
        "idade": 28,
        "fruta": "maçã"
    },
    {
        "nome": "João Pereira",
        "email": "joao.pereira@email.com",
        "idade": 34,
        "fruta": "banana"
    },
    {
        "nome": "Maria Oliveira",
        "email": "maria.oliveira@email.com",
        "idade": 22,
        "fruta": "laranja"
    },
    {
        "nome": "Carlos Santos",
        "email": "carlos.santos@email.com",
        "idade": 45,
        "fruta": "manga"
    },
    {
        "nome": "Beatriz Costa",
        "email": "beatriz.costa@email.com",
        "idade": 31,
        "fruta": "uva"
    }
]


app.get(`/`, (req, res) => {
    res.send("Hello world!");
});

app.get(`/caju`, (req, res) => {
    res.send("Eu gosto de caju!");
});

app.get(`/pegarUsuario`, (req, res) => {
    const userEmail = req.query.email;
    let userReq = null;

    usuarios.forEach((user) => {
        if (user.email === userEmail) {
            userReq = user;
        }
    })

    if (userReq === null) {
        return res.status(404).send("Usuario não encontrado")
    }

    return res.status(200).send(userReq)
});

app.post("/usuario", (req, res) => {
    const newUser = req.body;
    usuarios.push(newUser);

    res.send("Usuário cadastrado com sucesso")
})


app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
})