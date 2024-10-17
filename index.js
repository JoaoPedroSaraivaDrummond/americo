const express = require ("express")
const app = express()

app.get("/",function(req,res){
    res.send("bem vindo a este site")
})

app.get("/itens",function(req,res){
    res.send("<h1>Pagina de itens!</h1>")
})

app.get("/itens/:nome?",function(req,res){
    var nome =req.params.nome
    if(nome){
        res.send("<h1>O item "+nome+" esta incluso!</h1>")
    }else{
        res.send("<h1>Item criado!</h1>")
    }
})


app.listen(5500,function(erro){
    if(erro){
        console.log("Vish, alguma coisa nao esta certa...")
    }else{
        console.log("Tudo certo parceiro, servidor iniciado.")
    }
})