const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Aluno = new Schema({


apelido :{
    type: String,
    required: true
},

nome:{
    type: String,
    required:true
},

dataNascimento :{
 type: Date,
 required: true
},

sexo :{
    type: String,
    required: true
},

nomePai :{
    type: String,
    required: true
},

nomeMae :{
    type: String,
    required: true
},
naturalidade:{
    type: String,
    required: true
},

distrito :{
    type: String,
    required: true
},

provincia :{
    type: String,
    required: true
},
documento:{
    type: String,
    required:true
},

numeroDocumento:{
    type: String,
    required: true
},

dataValidade:{
    type: Date,
    required: true
},

estadoCivil:{
    type: String,
    required: true
},
residenciaActual:{
    type:String,
    required: true
},

bairro:{
    type: String,
    required: false
},

ruaAv :{
    type: String,
    required: false
},

casa:{
    type:String,
    required:false
},
unidadeComunal: {
    type: String,
    required: false
},

quarteirao:{
    type: Number,
    required:false
},

telefone1:{
    type:Number,
    required:true
},
 telefone2: {
     tupe: String,
     required: false
 },

 profissao:{
     type:String,
     required:true
 },

 classeVeiculo:{
     type:Schema.Types.ObjectId,
     ref:"classes",
     required:true
 },

 formaPagamento:{
     type:String,
     required: true
 },

 valorPago:{
     type:Number,
     required: true
 },
 data :{
     type: Date,
    default: Date.now()
 }


})

mongoose.model("alunos", Aluno)