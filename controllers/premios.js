const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp2 = addKeyword(['2', 'dos', 'premios'])
<<<<<<< HEAD
    .addAnswer([
        'Para conocer la lista de premios, visita: saborquepremia.mx/premios'
        , 'Y recuerda, los distribuidores con mayor puntaje (cada semana y al finalizar la dinámica) serán los ganadores. 🥇🥈🥉'
    ])
=======
    .addAnswer(`*2. Lista de premios* 🥇🥈🥉`)
    .addAnswer(`Si deseas consultar los premios a los que puedes ser acreedor con tu participación, visita la página web *https://capistrano.com/xxxxx*.
                \nTus puntos los podrás canjear por electrodomésticos, equipos electrónicos, equipos para tu negocio, remodelaciones y más.
                \n¿Deseas conocer más? 🤔 
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`)
>>>>>>> a26188899e6cf0fd697124554702b551435b4ff4


module.exports = flowMenuOp2