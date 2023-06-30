const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = require('./participar')
const flowMenuOp2 = require('./premios')
const flowMenuOp3 = require('./puntos')
const flowMenuOp4 = require('./dudas')
const flowMenu = addKeyword(['Cero', 'cero', '0', 'menu', 'menú', 'Menu', 'Menú'], { sensitive: true })
    .addAnswer(['Bienvenido a CAPISTRANO. Sabor que premia 🥇'],null,
        (ctx, { flowDynamic }) => {
            return flowDynamic(`Hola [_Nombre del distribuidor_] 🙂`)
        }).addAnswer(`¿Cómo puedo apoyarte?
        
        👉 1. Cómo participar
        👉 2. Lista de premios
        👉 3. Mi puntaje
        👉 4. Dudas, comentarios o sugerencias
        \n*Envía el número del que deseas más información.* `, { capture: true },null,[flowMenuOp1, flowMenuOp2, flowMenuOp4, flowMenuOp3])

module.exports = flowMenu