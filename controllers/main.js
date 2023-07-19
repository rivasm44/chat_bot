const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowRegistro = require("./registro");
const flowMenu = require("./menu");
const { getUserActive } = require("../reposotori/firestore");

const templateButtons = [
  {
    index: 1,
    urlButton: {
      displayText: ":star: Star Baileys on GitHub!",
      url: "https://github.com/adiwajshing/Baileys",
    },
  },
  {
    index: 2,
    callButton: {
      displayText: "Call me!",
      phoneNumber: "+1 (234) 5678-901",
    },
  },
  {
    index: 3,
    quickReplyButton: {
      displayText: "This is a reply, just like normal buttons!",
      id: "id-like-buttons-message",
    },
  },
];

const flowPrincipal = addKeyword(EVENTS.WELCOME)
  .addAnswer(
    "*CAPISTRANO, Sabor que premia* 🎁",
    {
      media:
        "http://agsit.com.mx/wp-content/uploads/2023/07/imageedit_2_9082779197.png",
    },
    async (ctx, { gotoFlow }) => {
      console.log(`Buscando usuario ---> ${ctx.from}`);
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
