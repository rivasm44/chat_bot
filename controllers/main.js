5215549434188

245648

121212

861862

const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowRegistro = require("./registro");
const flowMenu = require("./menu");
const {
  getUserActive,
} = require("../reposotori/firestore");

const flowInicio = addKeyword('binvenida', { sensitive: true })
  .addAnswer(['Bienvenido esta es tu oportunidad para ganar 🏆 miles de pesos en premios.'
    , '\nY para participar, solo deberás'
    ,'\n👉 Registrarte y'
    ,'👉 Superar tus compras semanales'
    , '\nRecuerda que para registrarte solicitaremos tu *Número de identificador de cliente*, Nombre, Apellido, Correo electrónico, Estado de la república'
    , '\n¿Estas listo(a) para iniciar? 🤔'])
  .addAnswer(
    '¡Solo escribe la palabra *registro* para empezar tu Registro! 😎'
    , { capture: true }, (ctx, { fallBack }) => {
      if (ctx.body != 'registro' && ctx.body != 'Registro' && ctx.body != 'REGISTRO') return fallBack()
    }, [flowRegistro]
  );

const flowPrincipal = addKeyword(EVENTS.WELCOME).addAnswer(
  "CAPISTRANO. Sabor que premia 🎁",
  null,
  async (ctx, { gotoFlow }) => {
    const userActive = await getUserActive("TELEFONO", ctx.from);
    // const userActive = await getUserActive("TELEFONO", '5215549434188');
    console.log("Usuario activo ---->", userActive);
    console.log("userActive.activo ---->", userActive.activo);
    if (userActive.activo) await gotoFlow(flowMenu)
    else return gotoFlow(flowInicio)
  }, [flowInicio, flowMenu])

module.exports = flowPrincipal;
