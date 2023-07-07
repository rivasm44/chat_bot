const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

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
  });
  console.log("Registro guardado --->", snapshot);

  return snapshot;
};

const getUserActive = async (phone) => {
  try {
    let user = {};
    const snapshot = await db
      .collection("usuarios")
      .where("TELEFONO", "==", phone)
      .get();

    if (snapshot.empty) {
      console.log(`No matching documents ----> ${phone}`);
      return { activo: false, user };
    }
    snapshot.forEach((doc) => {
      console.log(`Información del usuario ---> ${doc.id}, =>, ${doc.data()}`);
      user = doc.data();
    });
    return { activo: true, user };
  } catch (e) {
    console.log(`Ocurrio un error en getUserActive -->, ${e.message}`);
    return { activo: false, user };
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
      console.log(`Información del registro ---> ${doc.id}, =>, ${doc.data()}`);
      registro = doc.data();
    });
    return { activo: true, registro };
  } catch (e) {
    console.log(`Ocurrio un error en validatePreregistro -->, ${e.message}`);
    return { activo: false, registro };
  }
};

module.exports = { addRegister, getUserActive, validateId };
