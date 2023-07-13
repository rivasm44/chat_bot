const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp4 = addKeyword(['4', 'cuatro', 'dudas'])
    .addAnswer(`Será un placer apoyarte, por favor, escríbenos al correo info@saborquepremia.mx`)

module.exports = flowMenuOp4