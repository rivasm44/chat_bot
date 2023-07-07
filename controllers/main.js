const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowRegistro = require("./registro");
const flowMenu = require("./menu");

const flowPrincipal = addKeyword(EVENTS.WELCOME).addAnswer(
  "🚩 CAPISTRANO. Sabor que premia 🚩",
  null,
  async (ctx, {gotoFlow }) => {
    // if (ctx.from == '5215549434121') return gotoFlow(flowMenu)
    if (ctx.from == '5215549434127') return gotoFlow(flowMenu)
  }).addAnswer(
    `Bienvenido esta es tu oportunidad para ganar 🏆 miles de pesos en premios.
      \nY para participar, solo deberás
      \n👉 Registrarte y\n👉 Superar tus compras semanales
      \nRecuerda que para registrarte solicitaremos tu *Número de identificador de cliente*, Nombre, Apellido, Correo electrónico, Estado de la república
      \n¿Estas listo(a) para iniciar? 🤔
      \n¡Solo escribe la palabra *registro* para empezar tu Registro!`
      ,{ capture: true },null,flowRegistro
  );

module.exports = flowPrincipal;
