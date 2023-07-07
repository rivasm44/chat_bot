const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowMenu = require("./menu");
const flowRegistro = require("./registro");
const {
  addRegister,
  getUserActive,
  validateId,
} = require("../reposotori/firestore");

const flowPrincipal = addKeyword(EVENTS.WELCOME).addAnswer(
  "🚩 CAPISTRANO. Sabor que premia 🚩",
  null,
  async (ctx, { flowDynamic }) => {
    // if (ctx.from == '5215549434127')
    //     return endFlow({
    //         body: `¡UPS! Tu numero distribuidor *${numeroDistribuidor}* no es válido, por favor comunícate al 5512341234`,    // Aquí terminamos el flow si la condicion se comple
    //     })
    console.log("Objeto de entrada --->", ctx);
    const userActive = await getUserActive(ctx.from);
    console.log("Usuario activo ---->", userActive);

    /* const registro = await addRegister(
      "Pruebas",
      "pruebas@gmail.com",
      "112233",
      "Juanito Banana",
      ctx.pushName,
      ctx.from
    );
    console.log("Nuevo Registro ---->", registro); */
    return flowDynamic(
      `Bienvenido esta es tu oportunidad para ganar 🏆 miles de pesos en premios.
                \nY para participar, solo deberás
                \n👉 Registrarte y\n👉 Superar tus compras semanales
                \nRecuerda que para registrarte solicitaremos tu *Número de identificador de cliente*, Nombre, Apellido, Correo electrónico, Estado de la república
                \n¿Estas listo(a) para iniciar? 🤔
                \n¡Solo escribe la palabra *registro* para empezar tu Registro!`
    );
  },
  flowRegistro
);

module.exports = flowPrincipal;
