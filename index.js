import express from 'express';
import {montadoras, veiculos}  from './dados.js';

const app = express();

app.get('/',(req,res)=>{
    res.json({'Status': "Server OK"});
});

app.get('/montadoras',(req,res)=>{
    res.json(montadoras);
});

app.get('/veiculos',(req,res)=>{
    res.json(veiculos);
});

app.listen(3030, 'localhost' );