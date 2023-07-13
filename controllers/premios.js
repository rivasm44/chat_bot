const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp2 = addKeyword(['2', 'dos', 'premios'])
    .addAnswer([
        'Para conocer la lista de premios, visita: saborquepremia.mx/premios'
        , 'Y recuerda, los distribuidores con mayor puntaje (cada semana y al finalizar la dinámica) serán los ganadores. 🥇🥈🥉'
    ])


module.exports = flowMenuOp2