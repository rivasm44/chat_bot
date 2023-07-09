const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const { dateFormat } = require("../utils/utils");

const serviceAccount = require("../config/credentials.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const addRegister = async (
  apellidos,
  email,
  id,
  nombres,
  push_name,
  telefono
) => {
  const snapshot = await db.collection("usuarios").doc().set({
    ACTIVO: true,
    APELLIDOS: apellidos,
    EMAIL: email,
    ID: id,
    NOMBRES: nombres,
    PUSH_NAME: push_name,
    TELEFONO: telefono,
    FECHA_REGISTRO: dateFormat(),
  });
  console.log("Registro guardado --->", snapshot);

  return snapshot;
};

const getUserActive = async (file, phone) => {
  try {
    let user = {};
    const snapshot = await db
      .collection("usuarios")
      .where(file, "==", phone)
      .get();

    if (snapshot.empty) {
      console.log(`Registro no encontrado ----> ${phone}`);
      return { activo: false, user };
    }
    snapshot.forEach((doc) => {
      console.log(`Información del usuario ---> ${doc.id}, =>`);
      console.log(doc.data());
      user = doc.data();
    });
    return { activo: Object.keys(user).length > 0, user };
  } catch (e) {
    console.log(`Ocurrio un error en getUserActive -->, ${e.message}`);
    return { activo: false, user: {} };
  }
};

const validateId = async (id) => {
  try {
    let registro = {};
    const snapshot = await db
      .collection("preregistro")
      .where("ID", "==", id)
      .get();

    if (snapshot.empty) {
      console.log(`Registro no encontrado ----> ${id}`);
      return { activo: false, registro };
    }
    snapshot.forEach((doc) => {
      console.log(`Información del registro ---> ${doc.id}, =>`);
      console.log(doc.data());
      registro = doc.data();
    });
    return { activo: Object.keys(registro).length > 0, registro };
  } catch (e) {
    console.log(`Ocurrio un error en validatePreregistro -->, ${e.message}`);
    return { activo: false, registro: {} };
  }
};

const getAccumulated = async (id) => {
  try {
    let metricas = {};
    const snapshot = await db.collection("puntaje").where("ID", "==", id).get();

    if (snapshot.empty) {
      console.log(`Datos de puntaje ----> ${id}`);
      return { valid: false, metricas };
    }
    snapshot.forEach((doc) => {
      console.log(`Información del puntaje ---> ${doc.id}, =>`);
      console.log(doc.data());
      metricas = doc.data();
    });
    return { valid: Object.keys(metricas).length > 0, metricas };
  } catch (e) {
    console.log(`Ocurrio un error en getAccumulated -->, ${e.message}`);
    return { valid: false, metricas: {} };
  }
};

module.exports = { addRegister, getUserActive, getAccumulated, validateId };
