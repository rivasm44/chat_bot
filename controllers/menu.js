const { addKeyword } = require("@bot-whatsapp/bot");
const flowMenuOp1 = require("./participar");
const flowMenuOp2 = require("./premios");
const flowMenuOp4 = require("./dudas");
const flowMenuOp3 = require("./puntos");
const { getUserActive } = require("../reposotori/firestore");
const flowMenu = addKeyword(["menu", "menú", "Menu", "Menú", "M", "m"], {
  sensitive: true,
})
  .addAnswer(
    ["Te invitamos a revisar nuestro menu. 🙌"],
    null,
    async (ctx, { flowDynamic, gotoFlow }) => {
      console.log(`Buscando usuario ---> ${ctx.from}`);
      const userActive = await getUserActive("TELEFONO", ctx.from);
      console.log(`Datos del usuario --->`);
      console.log(userActive);
      await flowDynamic(`Bienvenido ${userActive.user.NOMBRES} ${userActive.user.APELLIDOS} de vuelta a *CAPISTRANO. Sabor que premia*. 🥳
            \n¿Cómo podemos apoyarte? 🫡
            \n👉1. Detalles de cómo participar\n👉2. Lista de premios. \n👉3. Mi puntaje.\n👉4. Dudas, comentarios o sugerencias.`);
    }
  )
  .addAnswer(
    `*Envía el número del que deseas más información.* `,
    { capture: true },
    async (ctx, { gotoFlow }) => {
      if (
        ctx.body != "1" &&
        ctx.body != "2" &&
        ctx.body != "3" &&
        ctx.body != "4"
      ) {
        return gotoFlow(flowMenu);
      }
    },
    [flowMenuOp1, flowMenuOp2, flowMenuOp3, flowMenuOp4]
  );

module.exports = flowMenu;
