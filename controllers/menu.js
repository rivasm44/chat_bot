const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = require('./participar')
const flowMenuOp2 = require('./premios')
const flowMenuOp4 = require('./dudas')
const utils = require("../utils/utils")
const flowMenuOp3 = require('./puntos')
const flowMenu = addKeyword(['Cero', 'cero', '0', 'menu', 'menú', 'Menu', 'Menú'], { sensitive: true })
    .addAnswer(['Bienvenido a CAPISTRANO. Sabor que premia 🥇'],
   async (ctx, { flowDynamic }) => {
        console.log('MENU',utils.data.nombre)
            await flowDynamic(`Hola ${utils.data.nombre} 🙂`)
        }).addAnswer(`\n¿Cómo puedo apoyarte? ${utils.nombre}
        \n👉 1. Cómo participar\n👉 2. Lista de premios\n👉 3. Mi puntaje\n👉 4. Dudas, comentarios o sugerencias
        \n*Envía el número del que deseas más información.* `,
        { capture: true },null,[flowMenuOp1, flowMenuOp2, flowMenuOp3, flowMenuOp4])

module.exports = flowMenu