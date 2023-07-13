const { addKeyword } = require("@bot-whatsapp/bot");
const {
  getUserActive,
  validateId,
  getAccumulated,
} = require("../reposotori/firestore");
const flowMenuOp3 = addKeyword(["3", "tres", "Tres"], {
  sensitive: true,
}).addAnswer(["*3. Mis puntos* 🥇"], null, async (ctx, { flowDynamic }) => {
  const { user } = await getUserActive("TELEFONO", ctx.from);
  // const { user } = await getUserActive("TELEFONO", '5215549434188');
  const { registro } = await validateId(user.ID);
  const { metricas } = await getAccumulated(user.ID);

  if (metricas.CREC < registro["OBJ CREC"]) {
    return flowDynamic(`*${user.NOMBRES} ${user.APELLIDOS}*
                \nTe compartimos tu alcance de la semana número *${metricas.SEMANA}* en *CAPISTRANO, Sabor que premia*:
                \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con *CAPISTRANO, Sabor que premia*.
                \n¿Deseas conocer más? 🤔
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`);
  }
  if (registro["OBJ CREC"] === metricas.CREC) {
    return flowDynamic(`*${user.NOMBRES} ${user.APELLIDOS}*
                \nQueremos informate tu puntaje en *CAPISTRANO, Sabor que premia* ya que vas muy bien en tus compras con gusto te compartimos tu alcance hasta la fecha:
                \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con *CAPISTRANO, Sabor que premia*.
                \n¿Deseas conocer más? 🤔
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`);
  } else {
    return flowDynamic(`!WOW! *${user.NOMBRES} ${user.APELLIDOS}* 🤩
                \nTu puntaje en *CAPISTRANO, Sabor que premia* va increible 🙌 
                \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con *CAPISTRANO, Sabor que premia*.
                \n¿Deseas conocer más? 🤔
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`);
  }
});

module.exports = flowMenuOp3;
