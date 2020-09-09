const mongoose= require ('mongoose')

const Schema = mongoose.Schema

const Classe =new Schema ({

    nome:{
        type: String,
        required : true
    },
    preco : {
        type: Number,
        required:true
    }
})


mongoose.model("classes", Classe)