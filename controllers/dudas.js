const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp4 = addKeyword(['4', 'cuatro', 'dudas'])
    .addAnswer(`Si deseas recibir más información contáctanos enviando un correo electrónico a ✉ atencion.clientes@capistrano.com o márcanos al número 📞 800 ### ### ### en caso de que tengas cualquier duda, comentario o sugerencia, será un placer poder apoyarte para tu participación en este concurso.
                \n¿Deseas conocer más? 🤔 
                
                👉 Cómo participar
                👉 Lista de premios
                👉 Mi puntaje
                👉 Dudas, comentarios o sugerencias
                \n*Escribe el número 0 para ingresar a tú menú principal* 
                `)

module.exports = flowMenuOp4