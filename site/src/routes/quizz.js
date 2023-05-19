var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.get("/", function (req, res) {
    quizzController.testar(req, res);
});

router.get("/listar", function (req, res) {
    quizzController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    quizzController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    quizzController.entrar(req, res);
});

module.exports = router;