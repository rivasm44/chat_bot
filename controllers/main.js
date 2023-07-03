const { addKeyword, addChild } = require("@bot-whatsapp/bot");
const flowRegistro = require("./registro");
const flowPrincipal = addKeyword(["hola", "ole", "alo"]).addAnswer(
  "🚩 CAPISTRANO. Sabor que premia 🚩",
  null,
  async (ctx, { flowDynamic }) => {
    // if (ctx.from == '5215549434127')
    //     return endFlow({
    //         body: `¡UPS! Tu numero distribuidor *${numeroDistribuidor}* no es válido, por favor comunícate al 5512341234`,    // Aquí terminamos el flow si la condicion se comple
    //     })
    return flowDynamic(
      `Bienvenido esta es tu oportunidad para ganar 🏆 miles de pesos en premios.
                \nY para participar, solo deberás
                
                👉 Registrarte y
                👉 Superar tus compras semanales
                \nRecuerda que para registrarte solicitaremos tu *Número de identificador de cliente*, Nombre, Apellido, Correo electrónico, Estado de la república
                \n¿Estas listo(a) para iniciar? 🤔
                \n*¡Solo escribe *Iniciar* para comenzar tu registro!*`
    );
  },
  [flowRegistro]
);

module.exports = flowPrincipal;
