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
    return flowDynamic(`*${user.NOMBRES} ${user.APELLIDOS}* con gusto te compartimos tu alcance para esta semana en *CAPISTRANO. Sabor que premia*:
                \nTe compartimos tu alcance de la semana número *${metricas.SEMANA}* en CAPISTRANO. Sabor que premia:
                \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n🚀 *Crecimiento logrado* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos* = ${metricas.PUNTOS}
                \nTe invitamos a que realices una nueva compra antes de que acabe la semana para que sumes puntos y aumentes tus oportunidades para ganar.
                \nNo dejes de participar y prepárate para ganar con *CAPISTRANO. Sabor que premia*. 🥇🥈🥉
                \n¿Deseas conocer más? 🤔
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`);
  }
  if (registro["OBJ CREC"] === metricas.CREC) {
    return flowDynamic(`*${user.NOMBRES} ${user.APELLIDOS}* con gusto te compartimos tu alcance para esta semana en *CAPISTRANO. Sabor que premia*:
                \nQueremos informate que vas muy bien en tus compras con gusto te compartimos tu alcance hasta la fecha:
                \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
                \nTe invitamos a que realices una nueva compra antes de que acabe la semana para que sumes puntos y aumentes tus oportunidades para ganar.
                \nNo dejes de participar y prepárate para ganar con *CAPISTRANO. Sabor que premia*. 🥇🥈🥉
                \n¿Deseas conocer más? 🤔
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`);
  } else {
    return flowDynamic(`!WOW *${user.NOMBRES} ${user.APELLIDOS}*!, con gusto te compartimos que vas super bien en tus compras 🤩 y tu alcance para esta semana en *CAPISTRANO. Sabor que premia* es de:
                \nTu puntaje en CAPISTRANO. Sabor que premia va increible 🙌 
                \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
                \nTe invitamos a que realices una nueva compra antes de que acabe la semana para que sumes puntos y aumentes tus oportunidades para ganar.
                \nNo dejes de participar y prepárate para ganar con *CAPISTRANO. Sabor que premia*. 🥇🥈🥉
                \n¿Deseas conocer más? 🤔
                \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`);
  }
});

module.exports = flowMenuOp3;
