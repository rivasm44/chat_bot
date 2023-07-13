const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp2 = addKeyword(['2', 'dos', 'premios'])
    .addAnswer(`*2. Lista de premios* 🥇🥈🥉`)
    .addAnswer(`Si deseas consultar los premios a los que puedes ser acreedor con tu participación, visita la página web *https://capistrano.com/xxxxx*.
                \nTus puntos los podrás canjear por electrodomésticos, equipos electrónicos, equipos para tu negocio, remodelaciones y más.
                \n¿Deseas conocer más? 🤔 
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`)


module.exports = flowMenuOp2