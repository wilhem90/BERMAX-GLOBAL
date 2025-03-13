const router = require("express").Router()
const controllerUser = require("../Controllers/controlUser.js")

// Essa vai ser a rota de logar em nosso sistema Bermax Global LTDA
router.post("/login", controllerUser.loginUser)

router.post("/create-account", controllerUser.createAccount)



module.exports = router