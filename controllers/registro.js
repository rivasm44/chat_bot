const { addKeyword } = require("@bot-whatsapp/bot");
const flowMenu = require("./menu");
const utils = require("../utils/utils");
const {
  addRegister,
  getUserActive,
  validateId,
} = require("../reposotori/firestore");

let idCliente;
let nombre;
let apellido;
let correo;
let isNumber;
const flowRegistro = addKeyword(
  ["registro", "Registro", "registrate", "Registrate", "regist"],
  { sensitive: true }
)
  .addAnswer(
    [`¿Cuál es tu número de cliente?\nConsta de 6 dígitos.`],
    { capture: true },
    async (ctx, { fallBack, endFlow }) => {
      idCliente = ctx.body;
      // VALIDAR LONGITUD
      if (idCliente.length < 6 || idCliente.length > 6) return fallBack();
      isNumber = Number(idCliente);
      // VALIDAR TIPO NUMERICO
      if (isNaN(isNumber)) return fallBack();
      // VALIDACIÓN SÍ EXISTE BD
      const isValida = await validateId(idCliente);

      const userActive = await getUserActive("ID", idCliente);

      if (!isValida.activo) {
        return endFlow({
          body: `Estimado participante. 😣
                    \nLe informamos que el número de identificador de cliente *${idCliente}*, proporcionado no está registrado en nuestra base de datos, por lo que le invitamos a rectificar el número correcto y volver a empezar su proceso de registro.
                    \nEn caso de que sea un error, le invitamos a contactar a nuestro equipo de atención a clientes enviando un correo electrónico a xxxx@capistrano.com para que su número sea dado de alta.
                    \nSí ingresaste algún dato incorrecto puedes volver a empezar escribiendo *incio* en cualquier momento.
                    `,
        });
      }
      // VALIDACIÓN SÍ ESTATUS BD
      if (userActive.activo) {
        return endFlow({
          body: `Estimado participante. 😣
                    \nLe informamos que según nuestra base de datos el registro a este consurso ya fue realizado previamente con la siguente información.
                    \n📅 Fecha de registro: *##/##/20##*
                    \n📱 Número telefónico con terminación: *${userActive.user.TELEFONO}*
                    \n📧 Correo electrónico: *${userActive.user.EMAIL}*
                    \nEn caso de que sea un error, le invitamos a contactar a nuestro equipo de atención a clientes enviando un correo electrónico a xxxx@capistrano.com para que su número sea dado de alta.
                    \nSí ingresaste algún dato incorrecto puedes volver a empezar escribiendo *incio* en cualquier momento.`,
        });
      }
    }
  )
  .addAnswer(
    "¿Cuál es su nombre(s)?",
    { capture: true },
    (ctx, { fallBack }) => {
      nombre = ctx.body;
      const regex =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      const isValid = regex.test(nombre);
      // VALIDAR CARÁCTERES
      if (!isValid) return fallBack();
      // VALIDAR LONGITUD
      if (nombre.length < 3) return fallBack();
    }
  )
  .addAnswer(
    "¿Cuál es su apellido(s)?",
    { capture: true },
    (ctx, { fallBack }) => {
      apellido = ctx.body;
      const regex =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      const isValid = regex.test(apellido);
      // VALIDAR CARÁCTERES
      if (!isValid) return fallBack();
      if (apellido.length < 3) return fallBack();
    }
  )
  .addAnswer(
    "¿Cuál es su correo electrónico?",
    { capture: true },
    (ctx, { fallBack }) => {
      correo = ctx.body;
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const validacionCorreo = regex.test(correo);
      if (!validacionCorreo) return fallBack();
    }
  )
  .addAnswer(
    "!Te deseamos mucha suerte¡ 🥇🍀🎁",
    null,
    async (ctx, { flowDynamic }) => {
      const name = { nombre: `${nombre} ${apellido}` };
      utils.nombre = name;
      console.log("REGISTRO", utils.nombre);
      const registro = await addRegister(
        apellido,
        correo,
        idCliente,
        nombre,
        ctx.pushName,
        ctx.from
      );
      console.log("Nuevo Registro ---->", registro);
      await flowDynamic(
        `Tu registro a sido completado con éxito ${utils.nombre.nombre} 👏
    \nRecuerda que:
    \n1. Todas tus compras que superen tu objetivo semanal, sumarán puntos en tu cuenta de CAPISTRANO. Sabor que premia.\n2. Tus puntos los podras cambiar por electrodomésticos, equipos electrónicos, equipos para tu negocio, remodelaciones  y más.\n3. Para ser uno de los [_número de premios_] ganadores [_semanales o mensuales_], deberás ser uno de los ganadores con mayor puntaje.
    \n${utils.nombre}, no dejes de participar y prepárate para  ganar con CAPISTRANO. Sabor que premia. 🎖💰
    \n¿Deseas conocer tu puntaje?`
      );
    }
  )
  .addAnswer(
    "Escribe *menu* para ingresar a tú menú principal",
    { capture: true },
    async (ctx, { gotoFlow }) => {
      return gotoFlow(flowMenu);
    }
  );

module.exports = flowRegistro;
