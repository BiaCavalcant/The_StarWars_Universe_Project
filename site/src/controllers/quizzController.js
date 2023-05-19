var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.get("/", function (req, res) {
    quizzController.testar(req, res);
});

router.get("/listar", function (req, res) {
    quizzController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    quizzController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    quizzController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    quizzController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    quizzController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    quizzController.deletar(req, res);
});

module.exports = router;