const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const FlowMain = require('./controllers/main')
const flowRegistro = require('./controllers/registro')
const flowMenu = require('./controllers/menu')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([FlowMain, flowMenu, flowRegistro])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
