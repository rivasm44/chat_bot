const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp4 = addKeyword(['4', 'cuatro', 'dudas'])
    .addAnswer(`*4. Dudas, comentarios o sugerencias* ☝️🙂`)
    .addAnswer(`Si deseas recibir más información contáctanos enviando un correo electrónico a ✉ *atencion.clientes@capistrano.com* o márcanos al número 📞 *800 ### ### ###* en caso de que tengas cualquier duda, comentario o sugerencia.
                \nSerá un placer poder apoyarte para tu participación en este concurso.
                \n¿Deseas conocer más?
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`)

module.exports = flowMenuOp4