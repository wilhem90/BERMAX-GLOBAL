const controllerUser = {

    // Vamos realizar a validação os dados do usuario antes de realizar a gravação dos dados
    createAccount: (req, res) => {
       try {
         
         // Vamos retornar um error se falta algum dados
         function errorMissData(message){
             return res.status(400).send({
                 message: `Deve enviar ${message}`
             })
         }
 
         const { documentId, fullNameUser, countryUser, phoneNumber, fullAddressUser } = req.body
         
         if (!documentId || documentId.length < 5) {
             return errorMissData("o numero do seu documento!")
         }
 
         if (!fullNameUser || fullNameUser.length < 3) {
             return errorMissData("um nome correto e completo!")
         }
 
         if (!countryUser || countryUser.length < 5) {
             return errorMissData("o numero do seu documento!")
         }
 
         if (!phoneNumber || phoneNumber.length < 8) {
             return errorMissData("um numero de celular valido!")
         }
 
         if (!fullAddressUser || fullAddressUser.length < 5) {
             return errorMissData("or informar um endereço valido!")
         }
 
         res.status(200).send({
             message: "Todos os seus dados foram validados pelo sistema, agora vamos enviar-os ao nosso gerente, logo em alguns instante a sua conta vai estar criada!"
         })
       } catch (error) {
        res.status(500).send({
            message: "Alguma coisa não deu certo, pode tentar de novo!"
        })
       }
    },

    loginUser: (req, res) => {
        res.status(200).send({
            message: "Estamos trabalhando para melhorar nosso sistema!"
        })
    }


}

module.exports = controllerUser