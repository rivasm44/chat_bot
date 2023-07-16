const {
  getAllUsers,
  validateId,
  getAccumulated,
} = require("../reposotori/firestore");
const { numeroDeSemana } = require("../utils/utils");
const { messages } = require("../utils/descriptionMsg");
const sendMessages = async (req, res, adapterProvider) => {
  try {
    let registro = {};
    const snapshot = await getAllUsers();
    snapshot.forEach(async (doc) => {
      registro.data = doc.data();
      console.log(
        `Información del usuario ---> ${doc.id}, ${doc.data().TELEFONO} =>`
      );
      console.log(`${doc.data().TELEFONO}@c.us`);
      const message = await getMetrics(doc.data());
      adapterProvider.sendText(`${doc.data().TELEFONO}@c.us`, message);
      registro.message = message;
      console.log(message);
    });
    console.log("Mensaje enviado");
    res.send({ registro });
  } catch (error) {}
};

const getMetrics = async (usuario) => {
  let message = "";
  const { registro } = await validateId(usuario.ID);
  const { metricas } = await getAccumulated(
    usuario.ID,
    numeroDeSemana(new Date())
  );
  if (metricas.CREC < registro["OBJ CREC"]) {
    message = messages("menor", usuario, metricas, registro);
  } else if (registro["OBJ CREC"] === metricas.CREC) {
    message = messages("objetivo", usuario, metricas, registro);
  } else {
    message = messages("superior", usuario, metricas, registro);
  }
  return message;
};

module.exports = {
  sendMessages,
};
