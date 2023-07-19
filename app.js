const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const FlowMain = require("./controllers/main");
const { sendMessages } = require("./controllers/sendNotifications");

try {
  const PORT = parseInt(process.env.PORT) || 8080;

  const flowNotificaciones = addKeyword([
    "Enviar notificaciones a participantes",
  ]).addAnswer(
    ["Ingresa tu clave"],
    { capture: true },
    async (ctx, { endFlow }) => {
      if (ctx.body == "CAPISTRANO, Sabor que premia.") {
        sendMessages(adapterProvider);
        return endFlow({
          body: "El envio de notificaciones esta siendo procesado...",
        });
      }
      return endFlow({ body: "No tienes acceso a esta funcionalidad." });
    }
  );
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([FlowMain, flowNotificaciones]);
  const adapterProvider = createProvider(BaileysProvider);
  module.exports = main = async () => {
    createBot({
      flow: adapterFlow,
      provider: adapterProvider,
      database: adapterDB,
    });

    console.log(`En el puerto ----> ${PORT}`);
    QRPortalWeb({ port: PORT });
  };

  main();
} catch (error) {
  console.log("Error ------>");
  console.log(error);
}
