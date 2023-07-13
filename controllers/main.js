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
    `Bienvenido (a) a *CAPISTRANO. Sabor que premia*. 🥳🥳🥳
      \nEsta es tu oportunidad para ganar miles de pesos en premios. 🏆 🏆 🏆
      \nPara participar solo deberás:
      \n👉 Registrarte y\n👉 Superar tus compras semanales
      \nPara registrarte necesitarás:
      \n1️⃣Número de cliente Capistrano.\n2️⃣Nombre completo.\n3️⃣Correo electrónico.      
      \n¿Estas listo(a) para iniciar? 🏁🏎️
      \nSolo escribe la palabra *registro* para comenzar. 🥳🥳🥳`,
    { capture: true },
    (ctx, { fallBack, endFlow }) => {
      if (ctx.body.toUpperCase().includes("MEN")) {
        return endFlow({
          body: `Ups… No pudimos procesar tu solicitud. 😰 Recuerda que primero debes registrarte para participar. 📝`,
        });
      }
      if (!ctx.body.toUpperCase().includes("REGI")) return fallBack();
    },
    [flowRegistro, flowMenu]
  );

module.exports = flowPrincipal;
