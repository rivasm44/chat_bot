const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = addKeyword(['1', 'uno', 'participar'])
    .addAnswer(`\n🎯 Todas tus compras que superen tu objetivo semanal sumarán puntos en tu cuenta.
                \n🎯 Tus puntos los podrás canjear por electrodomésticos, equipos electrónicos, equipo para tu negocio y más.
                \n🎯 Los distribuidores con mayor puntaje (cada semana y al finalizar la dinámica) serán los ganadores.
                \n¿Deseas conocer más? 🤔 
                \nEscribe *menu* para ingresar a tú menú principal.`) 

module.exports = flowMenuOp1