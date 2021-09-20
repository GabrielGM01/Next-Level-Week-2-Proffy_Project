// Dados
/*const proffys = [
    {
    name:'Diego Fernands',avatar:'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4'
    ,whatsapp:'61986739405',bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
    ,subject:'Química'
    ,cost:'20'
    ,weekday:[0]
    ,time_from:[720]
    ,time_to:[1220]
    },
    {
    name:'Daniele evangelista',avatar:'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4'
    ,whatsapp:'89595454',bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
    ,subject:'Química'
    ,cost:'20'
    ,weekday:[0]
    ,time_from:[720]
    ,time_to:[1220]
    }
];*/

const {
    pageLading,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages');

// Servidor
const express = require('express');
const server = express();

// configurar nujucks (Template enginer)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views',{
    express: server,
    noCache: true
});


server
// receber os dados do req.body
.use(express.urlencoded({ extended:true}))
// configurar arquivos estáticos 
.use(express.static('public'))
// rotas da aplicação
.get('/', pageLading)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5000);