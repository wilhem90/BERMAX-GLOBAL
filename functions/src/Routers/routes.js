const router = require("express").Router()
const controllerUser = require("../Controllers/controlUser.js")

// <Endpoint> Para cadastrar usuarios no sistema
router.post("/create-account", controllerUser.createAccount)

// <Endpoint> para permitir o usuario logar em nosso sistema Bermax Global LTDA
router.post("/login", controllerUser.loginUser)




module.exports = router