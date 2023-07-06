const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = require('./participar')
const flowMenuOp2 = require('./premios')
const flowMenuOp4 = require('./dudas')
const utils = require("../utils/utils")
const flowMenuOp3 = require('./puntos')
const flowMenu = addKeyword(['menu', 'menú', 'Menu', 'Menú'], { sensitive: true })
    .addAnswer(['Bienvenido a CAPISTRANO. Sabor que premia 🥇'],
   async (ctx, { flowDynamic}) => {
       await flowDynamic(`Hola [_Nombre del participante_] 🙂`)
    }).addAnswer(`¿Cómo puedo apoyarte? ${utils.nombre}
        \n👉 1. Cómo participar\n👉 2. Lista de premios\n👉 3. Mi puntaje\n👉 4. Dudas, comentarios o sugerencias
        \n*Envía el número del que deseas más información.* `,
        { capture: true },async (ctx, { fallBack}) => {
            if (ctx.body!='1'&&ctx.body!='2'&&ctx.body!='3'&&ctx.body!='4') return fallBack()
        },[flowMenuOp1, flowMenuOp2, flowMenuOp3, flowMenuOp4])

module.exports = flowMenu