const { addKeyword } = require("@bot-whatsapp/bot");
const {
  getUserActive,
  validateId,
  getAccumulated,
} = require("../reposotori/firestore");
const { messages } = require("../utils/descriptionMsg");

const flowMenuOp3 = addKeyword(["3", "tres", "Tres"], {
  sensitive: true,
}).addAnswer(["*3. Mis puntos* 🥇"], null, async (ctx, { flowDynamic }) => {
  const { user } = await getUserActive("TELEFONO", ctx.from);
  // const { user } = await getUserActive("TELEFONO", '5215549434188');
  const { registro } = await validateId(user.ID);
  const { metricas } = await getAccumulated(user.ID);

  if (metricas.CREC < registro["OBJ CREC"]) {
    const message = messages("menor", user, metricas, registro);
    return flowDynamic(message);
  }
  if (registro["OBJ CREC"] === metricas.CREC) {
    const message = messages("objetivo", user, metricas, registro);
    return flowDynamic(message);
  } else {
    const message = messages("superior", user, metricas, registro);
    return flowDynamic(message);
  }
});

module.exports = flowMenuOp3;
