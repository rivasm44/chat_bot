const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowRegistro = require("./registro");
const flowMenu = require("./menu");
const { getUserActive } = require("../reposotori/firestore");

const flowPrincipal = addKeyword(EVENTS.WELCOME)
  .addAnswer(
    "CAPISTRANO. Sabor que premia 🎁",
    null,
    async (ctx, { gotoFlow }) => {
      const userActive = await getUserActive("TELEFONO", ctx.from);
      console.log("Usuario activo ---->", userActive);

      console.log("userActive.activo ---->", userActive.activo);
      if (userActive.activo) await gotoFlow(flowMenu);
    }
  )
  .addAnswer(
    `Bienvenido esta es tu oportunidad para ganar 🏆 miles de pesos en premios.
      \nY para participar, solo deberás
      \n👉 Registrarte y\n👉 Superar tus compras semanales
      \nRecuerda que para registrarte solicitaremos tu Número de identificador de cliente, Nombre, Apellido, Correo electrónico, Estado de la república
      \n¿Estas listo(a) para iniciar? 🤔
      \n¡Solo escribe la palabra registro para empezar tu Registro!`,
    { capture: true },
    (ctx, { fallBack, endFlow }) => {
      if (ctx.body.toUpperCase().includes("MEN")) {
        return endFlow({
          body: `Estimado participante necesitas de un registro para entrar al menú. 😣`,
        });
      }
      if (!ctx.body.toUpperCase().includes("REGI")) return fallBack();
    },
    [flowRegistro, flowMenu]
  );

module.exports = flowPrincipal;
