const { addKeyword } = require('@bot-whatsapp/bot')
const flowOTP3 = addKeyword(['3', 'tres', 'Tres'], { sensitive: true })
    .addAnswer(['Mis puntos 🥇'],null,
        (ctx, { flowDynamic }) => {
            return flowDynamic(`[_Nombre del participante_] 🙂
            \nTe compartimos tu alcance de la semana número *##* en CAPISTRANO. Sabor que premia:
            \n-_KPS_=[_valor de la semana activa variable__ *KPS*]
            \n-_$PS_=[_valor de la semana activa variable_ *$PS*]
            \n-_Objetivo de crecimiento_=[_valor variable_ *$OBJCREC*]
            \n-_Crecimiento_=[_valor de la semana activa variable_ *$CREC*]
            
            -Total de puntos actuales=[_valor de la semana activa variable_ *$PTOS*]
            \n🎯 Los lunes actualizaremos está información para que el martes recibas un mensaje con los datos realacionados de la última semana con los puntos obtenidos en este concurso.
            \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.
            \n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
            
            \n*Escribe el número 0 para ingresar a tú menú principal* `)
        })

module.exports = flowOTP3