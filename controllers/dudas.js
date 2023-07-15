const { addKeyword } = require("@bot-whatsapp/bot");

const flowMenuOp4 = addKeyword(["4", "cuatro", "dudas"]).addAnswer([
  "*4. Dudas, cometarios y sugerencias* 🤔",
  "\nSerá un placer apoyarte, por favor, escríbenos al correo info@saborquepremia.mx",
  "\n¿Deseas conocer más? 🤔 ",
  "\nEscribe *menu* o la letra *m* para ingresar a tú menú principal.",
]);

module.exports = flowMenuOp4;
