const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const FlowMain = require("./controllers/main");
const { sendMessages } = require("./controllers/sendNotifications");
const express = require("express");
const app = express();
try {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([FlowMain]);
  const adapterProvider = createProvider(BaileysProvider);
  app.get("/inicio", (req, res) => {
    res.send("CAPISTRANO. Sabor que premia!");
  });

  app.get("/send-message-bot", async (req, res) => {
    console.log(req);
    sendMessages(req, res, adapterProvider);
  });
  const PORT = parseInt(process.env.PORT) || 5000;
  app.listen(PORT, () =>
    console.log(`Servidor de notificaciones en el puerto:${PORT}`)
  );

  const main = async () => {
    createBot({
      flow: adapterFlow,
      provider: adapterProvider,
      database: adapterDB,
    });

    const PORT_CAT = parseInt(process.env.PORT) || 8080;
    console.log(`En el puerto ----> ${PORT_CAT}`);
    QRPortalWeb({ port: PORT_CAT });
  };

  main();
} catch (error) {
  console.log("Error ------>");
  console.log(error);
}
