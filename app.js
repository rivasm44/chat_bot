const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const FlowMain = require("./controllers/main");
const { sendMessages } = require("./controllers/sendNotifications");

try {
  const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([FlowMain]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
      flow: adapterFlow,
      provider: adapterProvider,
      database: adapterDB,
    });

    const PORT_CAT = process.env.PORT || 3000;

    QRPortalWeb({ port: PORT_CAT });

    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
      res.send("CAPISTRANO. Sabor que premia!");
    });

    app.get("/send-message-bot", async (req, res) => {
      sendMessages(req, res, adapterProvider);
    });
    const PORT = 3002;
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  };

  main();
} catch (error) {
  console.log("Error ------>");
  console.log(error);
}
