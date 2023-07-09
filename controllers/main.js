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

<<<<<<< HEAD
const flowPrincipal = addKeyword(EVENTS.WELCOME).addAnswer(
  "CAPISTRANO. Sabor que premia 🎁",
  null,
  async (ctx, { gotoFlow }) => {
    const userActive = await getUserActive("TELEFONO",'5215549434121');
    console.log("Usuario activo ---->", userActive);
    
=======
>>>>>>> 270ca42db876741b99ccb1a614baa59b5352c511
      console.log("userActive.activo ---->", userActive.activo);
      if (userActive.activo) await gotoFlow(flowMenu);
    }
  )
  .addAnswer(
    `Bienvenido esta es tu oportunidad para ganar 🏆 miles de pesos en premios.
      \nY para participar, solo deberás
      \n👉 Registrarte y\n👉 Superar tus compras semanales
      \nRecuerda que para registrarte solicitaremos tu *Número de identificador de cliente*, Nombre, Apellido, Correo electrónico, Estado de la república
      \n¿Estas listo(a) para iniciar? 🤔
<<<<<<< HEAD
      \n¡Solo escribe la palabra *registro* para empezar tu Registro!`
      ,{ capture: true },(ctx,{fallBack, endFlow})=> {
        // if (ctx.body != 'MENU' && ctx.body != 'MENÚ') {
        //   return endFlow({
        //     body: `Estimado participante necesitas de un registro para entrar al menú. 😣`,
        //   });
        // }
        if (ctx.body.toUpperCase() != 'REGISTRO'&&ctx.body.toUpperCase() != 'REGISTRATE') return fallBack()
      },[flowRegistro, flowMenu]
=======
      \n¡Solo escribe la palabra *registro* para empezar tu Registro!`,
    { capture: true },
    (ctx, { fallBack, endFlow }) => {
      if (ctx.body.toUpperCase().includes("MENU")) {
        return endFlow({
          body: `Estimado participante necesitas de un registro para entrar al menú. 😣`,
        });
      }
      if (ctx.body.toUpperCase().includes("REGIST")) return fallBack();
    },
    [flowRegistro, flowMenu]
>>>>>>> 270ca42db876741b99ccb1a614baa59b5352c511
  );

module.exports = flowPrincipal;
