const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./src/Routers/routes.js")
const { onRequest } = require("firebase-functions/v2/https");

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)



// Aqui vamos exportar nosso app para firebase functions ai nos vamos usar express para realizar as requisições
exports.bermaxglobal = onRequest(app)
