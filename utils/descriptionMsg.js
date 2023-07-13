const messages = (tipo, user, metricas, registro) => {
  switch (tipo) {
    case "menor":
      return `*${user.NOMBRES} ${user.APELLIDOS}*
            \nTe compartimos tu alcance de la semana número *${metricas.SEMANA}* en *CAPISTRANO, Sabor que premia*:
            \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
            \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con *CAPISTRANO, Sabor que premia*.
            \n¿Deseas conocer más? 🤔
            \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`;
    case "objetivo":
      return `*${user.NOMBRES} ${user.APELLIDOS}*
    \nQueremos informate tu puntaje en *CAPISTRANO, Sabor que premia* ya que vas muy bien en tus compras con gusto te compartimos tu alcance hasta la fecha:
    \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
    \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con *CAPISTRANO, Sabor que premia*.
    \n¿Deseas conocer más? 🤔
    \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`;
    default:
      return `!WOW! *${user.NOMBRES} ${user.APELLIDOS}* 🤩
            \nTu puntaje en *CAPISTRANO, Sabor que premia* va increible 🙌 
            \n🚀 *Objetivo de crecimiento* = ${registro["OBJ CREC"]}\n\n🚀 *Crecimiento* = ${metricas.CREC}\n🚀 *KPS* = ${metricas.KPS}\n🚀 *$PS* = ${metricas.$PS}\n🚀 *Total de Puntos actuales* = ${metricas.PUNTOS}
            \n🎯 Te invitamos a que realices una nueva compra, sumar puntos y aumentar tus oportunidades para ganar.\n🎯 No dejes de participar y preparate para ganar con *CAPISTRANO, Sabor que premia*.
            \n¿Deseas conocer más? 🤔
            \nEscribe *menu* o la letra *m* para ingresar a tú menú principal.`;
  }
};

module.exports = { messages };
