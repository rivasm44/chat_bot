const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp4 = addKeyword(['4', 'cuatro', 'dudas'])
    .addAnswer(`Si deseas recibir más información contáctanos enviando un correo electrónico a ✉ atencion.clientes@capistrano.com o márcanos al número 📞 800 ### ### ### en caso de que tengas cualquier duda, comentario o sugerencia.
                \nSerá un placer poder apoyarte para tu participación en este concurso.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`)

module.exports = flowMenuOp4