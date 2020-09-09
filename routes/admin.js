const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')
require("../models/Classe")
const Classe = mongoose.model("classes")


router.get('/', (req, res)=>{

        res.render("admin/index")
})


router.get('/classe', (req, res)=>{

        res.render("admin/classe")
})

router.get('/classe/list', (req, res)=>{

        Classe.find().then((classes)=>{


        res.render("admin/classelist", {classes: classes})

        }).catch((error)=>{
                req.flash("error_msg", "erro ao listar as classes")
                res.redirect("/admin")
        })

})


router.post('/classe/nova', (req, res)=>{

                const novaClasse = {
                        nome: req.body.nome,
                        preco: req.body.preco
                }
        
                new Classe(novaClasse).save().then(()=>{
                        req.flash("success_msg", "Classe inseirda com sucesso")
                        res.redirect("/admin")
                }).catch((error)=>{
                       req.flash("error_msg", "falha ao inserir a classe")
                        res.redirect("/admin/classe")
                })


})


router.get('/classe/edit/:id', (req, res)=>{

        Classe.findOne({_id:req.params.id}).then((classe)=>{

                res.render("admin/classeedit", {classe: classe})
        }).catch((error)=>{
                req.flash("error_msg", "falha ao carregar class")
                res.redirect("/admin/classelist")
        })
})

router.post('/classe/edit', (req, res)=>{

        Classe.findOne({_id: req.body.id}).then((classe)=>{

                classe.nome = req.body.nome
                classe.preco = req.body.preco

                classe.save().then(()=>{

                        req.flash("success_msg", "classe editada com sucesso")
                        res.redirect("/admin/classe/list")
                }).catch((error)=>{
                        req.flash("error_msg", "erro ao editar classe")
                        res.redirect("/admin/classe")
                })

        }).catch((error)=>{
                req.flash("error_msg", "erro ao encontrar id da classe para editar")
                res.redirect("/admin/classe")
                console.log(error)
        })
})

router.post('/classe/delet', (req, res)=>{

        Classe.remove({_id: req.body.id}).then(()=>{
                req.flash("success_msg", "classe deletada com sucesso")
                res.redirect("/admin/classe/list")
        }).catch((error)=>{
                req.flash("error_msg", "erro ao deletar a classe")
                res.redirect("/admin/classe/list")
        })
})


router.get('/aluno', (req, res)=>{

        res.render("admin/aluno")
})

module.exports = router



