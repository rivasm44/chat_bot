const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = require('./participar')
const flowMenuOp2 = require('./premios')
const flowMenuOp4 = require('./dudas')
const flowMenuOp3 = require('./puntos')
const flowMenu = addKeyword(['menu', 'menú', 'Menu', 'Menú'], { sensitive: true })
    .addAnswer([
        '¿Cómo puedo apoyarte? '
        , '👉 1. Cómo participar'
        , '👉 2. Lista de premios'
        , '👉 3. Mi puntaje'
        , '👉 4. Dudas, comentarios o sugerencias'
    ],
        async (ctx, { flowDynamic }) => {
            await flowDynamic(`Hola [_Nombre del participante_] 🙂`)
        }).addAnswer(`*Envía el número del que deseas más información.* `,
            { capture: true }, async (ctx, { gotoFlow }) => {
                if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3' && ctx.body != '4') {
                    return gotoFlow(flowMenu)
                }
            }, [flowMenuOp1, flowMenuOp2, flowMenuOp3, flowMenuOp4])

module.exports = flowMenu