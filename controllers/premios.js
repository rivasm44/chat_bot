const { addKeyword } = require("@bot-whatsapp/bot");

const flowMenuOp2 = addKeyword(["2", "dos", "premios"]).addAnswer([
  "*2. Lista de premios* 🏆",
  "\nPara conocer la lista de premios, visita: saborquepremia.mx/premios",
  "Y recuerda, los distribuidores con mayor puntaje (cada semana y al finalizar la dinámica) serán los ganadores. 🥇🥈🥉",
  "\n¿Deseas conocer más? 🤔 ",
  "\nEscribe *menu* o la letra *m* para ingresar a tú menú principal.",
]);

module.exports = flowMenuOp2;
