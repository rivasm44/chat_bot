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

const mask = function (params) {
  if (params.includes("@")) {
    const index = params.indexOf("@");
    const prt1 = params.substring(0, 1);
    const prt2 = params.substring(index - 1, index);
    const prt3 = params.substring(index, params.length);
    const correo = prt1 + "xxxxx" + prt2 + prt3;
    return correo;
  } else
    return "xx xxxx xx" + params.substring(params.length - 2, params.length);
};

const flowRegistro = addKeyword([
  "registro",
  "Registro",
  "registrate",
  "Registrate",
  "regist",
  "Regist",
  "regis",
  "Regis",
  "R",
  "r"
])
  .addAnswer(
    [
      'Paso 1 de 3.'
      ,'Por favor ingresa tu número de cliente Capistrano a *6 dígitos*. 🔢'
    ],
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
                    \nEn caso de que sea un error, le invitamos a contactar a nuestro equipo de atención a clientes enviando un correo electrónico a info@saborquepremia.mx para que su número sea dado de alta.
                    \nSí ingresaste algún dato incorrecto puedes volver a empezar escribiendo *incio* o la letra *i* en cualquier momento.`,
        });
      }
      // VALIDACIÓN SÍ ESTATUS BD
      if (userActive.activo) {
        return endFlow({
          body: `Ups… Detectamos que tu número de distribuidor está vinculado con otro número telefónico 😱
                    \n📆Fecha de registro: *${userActive.user.FECHA_REGISTRO}*
                    \n📱Número telefónico registrado (terminación): *${mask(userActive.user.TELEFONO)}*
                    \n📩Correo electrónico (terminación): *${mask(userActive.user.EMAIL)}*
                    \nSi deseas que revisemos o actualicemos tu registro, por favor escríbenos a info@saborquepremia.mx y nuestro equipo de atención a clientes te apoyará. 📩👌`
        });
      }
    }
  )
  .addAnswer(
    [
      'Excelente, pasemos al paso 2 de 3: Registrar tu nombre. 👍'
      ,'Por favor ingresa solo tu primer nombre (_sin apellido_). 📝'
    ]
    ,
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
    [
      'Vamos super bien. 🥳'
      ,'Ahora, por favor ingresa solo tu primer apellido. 📝'
    ],
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
    [
      '¡Listo! Estamos en el paso 3 de 3. 🥳'
      ,'Por favor ingresa tu correo electrónico. 📩👌'
    ],
    { capture: true },
    (ctx, { fallBack }) => {
      correo = ctx.body;
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const validacionCorreo = regex.test(correo);
      if (!validacionCorreo) return fallBack();
    }
  )
  .addAnswer(
    "¡Felicidades, tu registro fue completado con éxito! 🥳",
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
        `Y recuerda: 
        \n1️⃣CAPISTRANO. Sabor que premia inicia el 17 de julio y terminará el 10 de septiembre; es decir 8 semanas o 2 meses.\n2️⃣Tendremos ganadores semanales y ganadores al finalizar la dinámica.\n3️⃣Nuestra meta es recompensar tus compras, por lo que al superar tus objetivos semanales, recibirás puntos. \n 4️⃣Los distribuidores con mayor puntaje (cada semana y al finalizar la dinámica) serán los ganadores.\n5️⃣Habrá premios para tu hogar y negocio, por ejemplo:
        \n- Básculas de plataforma
        \n- Baterías de cocina de 15, 18, 38, 49 pzs, y kits de 4 cuchillos.  
        \n- Bicicletas 29”
        \n- Bocinas Alexa echo dot 5ta generación y Party box
        \n- Cajas registradoras
        \n- Freidoras de Aire
        \n- Frigobares / Enfriadores de bebidas
        \n- Grills (parrilla a carbón)
        \n- Laptops 15.6”
        \n- Motocicletas de trabajo 110CC y 125CC, y deportivas 200CC
        \n- Pantallas LED 55”
        \n- Rebanadoras de carnes frías
        \n- Tablets 10.4"
        \n- Vitrinas para refrigerar`
      );
    }
  )
  .addAnswer(
    [
      'Finalmente, si tienes alguna pregunta, no dudes en contactarnos:'
      ,'1️⃣ Escríbenos al correo info@saborquepremia.mx'
      ,'2️⃣ Visita saborquepremia.mx o'
      ,'3️⃣ Escribe *Menú* en este chat. 🥳'
    ],
    { capture: true },
    async (ctx, { gotoFlow }) => {
      return gotoFlow(flowMenu);
    }
  );

module.exports = flowRegistro;
