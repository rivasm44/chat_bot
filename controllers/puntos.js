const { addKeyword } = require('@bot-whatsapp/bot')

const flowMenuOp3 = addKeyword(['3', 'tres', 'Tres'], { sensitive: true })
    .addAnswer(['Mis puntos 🥇'],null,
        (ctx, { flowDynamic }) => {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
              }
            const res = getRandomInt(3);
            if (res < 1) {
                return flowDynamic(`[_Nombre del participante_] 🙂
                \nTe compartimos tu alcance de la semana número *##* en CAPISTRANO. Sabor que premia:
                \n-*KPS*=["KPS"]
                \n-*$PS*=["$PS"]
                \n-*Objetivo de crecimiento*=[$OBJCREC]
                \n-*Crecimiento*=[$CREC"]
                \n-*Total de Puntos actuales*=["$PTOS"]
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`)
            }
            if(res === 1) {
                return flowDynamic(`[_Nombre del participante_] 🙂
                \nQueremos informate que vas muy bien en tus compras con gusto te compartimos tu alcance hasta la fecha:
                \n-*KPS*=["KPS"]
                \n-*$PS*=["$PS"]
                \n-*Objetivo de crecimiento*=[$OBJCREC]
                \n-*Crecimiento*=[$CREC"]
                \n-*Total de Puntos actuales*=["$PTOS"]
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`)
            }
            else {
                return flowDynamic(`!WOW! [_Nombre del participante_] 🤩
                \nTu puntaje en CAPISTRANO. Sabor que premia va increible 🙌 
                \n-*KPS*=["KPS"]
                \n-*$PS*=["$PS"]
                \n-*Objetivo de crecimiento*=[$OBJCREC]
                \n-*Crecimiento*=[$CREC"]
                \n-*Total de Puntos actuales*=["$PTOS"]
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`)
            }
        })

module.exports = flowMenuOp3