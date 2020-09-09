// Carregando Modulos
const express = require ('express')
const handlebars = require ('express-handlebars')
const bodyparser = require('body-parser')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')
const admin = require("./routes/admin")
const path = require ('path')
const Hbs = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')

// Configuracaoes
    //session
    app.use(session({

        secret: "pfp",
        resave: true,
        saveUninitialized: true

    }))
    app.use(flash())

    // Middleware
    app.use((req, res, next)=>{

        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()

    })
    
    // BodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Handlebars
    app.engine('handlebars', handlebars({defaultLayout:'main',
    handlebars: allowInsecurePrototypeAccess(Hbs)

    }))
    app.set('view engine', 'handlebars')

    // Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/sanpaulo").then(()=>{
        console.log("mongodb connected")

    }).catch((error)=>{
        console.log("mongodb error " + error)
    })

// Carregando Arquivos Estaticos
    app.use(express.static(path.join(__dirname, "public")))

// Chamando a minha rota
    app.use('/admin', admin)

    
    // Servidor
    const PORT = 3001
    app.listen(PORT, ()=>{
        console.log("server on port" + PORT)
    })

