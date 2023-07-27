const express = require('express');
const connection = require('./config/connection');
const User = require('./model/user');
const app = express();
app.use(express.json())
const port = process.env.PORT || 5475;

app.listen(port, () => { console.log(`Run server...${port}`) });



app.get('/', (req, res) => {
    res.send("Api - USER");
})

app.post('/user', (req, res) => {
    const { id, name, password, email } = req.body;
    User.create({
        id: id,
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        console.log(`Ops, deu erro: ${erro}`);
    })
})