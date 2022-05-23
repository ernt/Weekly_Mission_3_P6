//usando objeto express 
const express = require('express')
// app express
const app = express()
//puerto
const port = 3000

//path inicial,respode a la url localhost:3000
app.get('/',(req,res)=> {
    res.send('Hello World!')
})

//Con eto inicializamos esta app 

app.listen (port,() =>{
    console.log(`Example app listening on port ${port}`)
})
//Responder texto 
//localhost:3000/launchx
app.get('/launchx',(req,res)=> {
    res.send('Bienvenido a launchx')
})

//Regresar objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode',(req,res)=> {
    const explorer = {name:"Explorer",msg:"Hello"}
    res.send(explorer)
})

//Query Params:Recibir parametros por la url
//localhost:3000/explorers/ernt
//req.params={"explorerName":"ernt"}
app.get('/explorers/:explorerName',(req,res)=> {
    res.send(req.params)
})