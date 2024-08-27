 import express from 'express';
import {Listar, ConsultarId,} from './service/veiculos.js';
import {lista, ConsultaComId, NomeMontadora} from './service/montadoras.js';

const app = express();

app.get('/veiculos', (req, res) => {

    res.status(200).json(Listar())
});


app.get('/veiculos/:id', (req, res) => {
    let id = req.params.id;
    let resultconsulta = ConsultarId(id);
    if (resultconsulta) {
        res.status(200).json(resultconsulta);
    } else {
        res.status(404).json({
            "erro": "veiculo não encontrado"
        });
    }
})



app.get('/montadoras', (req, res) => {

    res.status(200).json(lista())
});


app.get('/montadoras/:id', (req, res) => {
    let id = req.params.id;
    let resultconsulta = ConsultaComId(id);
    if (resultconsulta) {
        res.status(200).json(resultconsulta);
    } else {
        res.status(404).json({
            "erro": "fabricante não encontrado"
        });
    }
})

app.listen(80);