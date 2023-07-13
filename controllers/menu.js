const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = require('./participar')
const flowMenuOp2 = require('./premios')
const flowMenuOp4 = require('./dudas')
const flowMenuOp3 = require('./puntos')
const { getUserActive } = require('../reposotori/firestore')
const flowMenu = addKeyword(['menu', 'menú', 'Menu', 'Menú', 'M', 'm'], { sensitive: true })
    .addAnswer(['Te invitamos a revisar nuestro menu. 🙌']
        , {
            media: 'http://agsit.com.mx/wp-content/uploads/2023/07/imageedit_2_9082779197.png',
          }
        , async (ctx, { flowDynamic }) => {
            const userActive = await getUserActive("TELEFONO", ctx.from);
            // const userActive = await getUserActive("TELEFONO", '5215549434188');
            await flowDynamic(`Bienvenido ${userActive.user.NOMBRES} ${userActive.user.APELLIDOS} de vuelta a *CAPISTRANO. Sabor que premia*. 🥳
            \n¿Cómo podemos apoyarte? 🫡
            \n👉1. Detalles de cómo participar\n👉2. Lista de premios. \n👉3. Mi puntaje.\n👉4. Dudas, comentarios o sugerencias.`)
        }).addAnswer(`*Envía el número del que deseas más información.* `,
            { capture: true }, async (ctx, { gotoFlow }) => {
                if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3' && ctx.body != '4') {
                    return gotoFlow(flowMenu)
                }
            }, [flowMenuOp1, flowMenuOp2, flowMenuOp3, flowMenuOp4])

module.exports = flowMenu