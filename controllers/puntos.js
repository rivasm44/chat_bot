const { addKeyword } = require("@bot-whatsapp/bot");
const {
  getUserActive,
  validateId,
  getAccumulated,
} = require("../reposotori/firestore");
const flowMenuOp3 = addKeyword(["3", "tres", "Tres"], {
  sensitive: true,
}).addAnswer(["Mis puntos 🥇"], null, async (ctx, { flowDynamic }) => {
  const { user } = await getUserActive("TELEFONO", ctx.from);
  const { registro } = await validateId(user.ID);
  const { metricas } = await getAccumulated(user.ID);

  if (registro["OBJ CREC"] < metricas.CREC) {
    return flowDynamic(`*${user.NOMBRES}* 🙂
                \nTe compartimos tu alcance de la semana número *${metricas.SEMANA}* en CAPISTRANO. Sabor que premia:
                \n-*KPS*=${metricas.KPS}
                \n-*$PS*=${metricas.$PS}
                \n-*Objetivo de crecimiento*=${registro["OBJ CREC"]}
                \n-*Crecimiento*=${metricas.CREC}
                \n-*Total de Puntos actuales*=${metricas.PUNTOS}
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`);
  }
  if (registro["OBJ CREC"] === metricas.CREC) {
    return flowDynamic(`${user.NOMBRES} 🙂
                \nQueremos informate que vas muy bien en tus compras con gusto te compartimos tu alcance hasta la fecha:
                \n-*KPS*=${metricas.KPS}
                \n-*$PS*=${metricas.$PS}
                \n-*Objetivo de crecimiento*=${registro["OBJ CREC"]}
                \n-*Crecimiento*=${metricas.CREC}
                \n-*Total de Puntos actuales*=${metricas.PUNTOS}
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`);
  } else {
    return flowDynamic(`!WOW! ${user.NOMBRES} 🤩
                \nTu puntaje en CAPISTRANO. Sabor que premia va increible 🙌 
                \n-*KPS*=${metricas.KPS}
                \n-*$PS*=${metricas.$PS}
                \n-*Objetivo de crecimiento*=${registro["OBJ CREC"]}
                \n-*Crecimiento*=${metricas.CREC}
                \n-*Total de Puntos actuales*=${metricas.PUNTOS}
                \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con CAPISTRANO. Sabor que premia.
                \n¿Deseas conocer más?
                \nEscribe *menu* para ingresar a tú menú principal.`);
  }
});

module.exports = flowMenuOp3;
