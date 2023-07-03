const { addKeyword } = require("@bot-whatsapp/bot");
const flowMenu = require("./menu");

let idCliente;
let nombre;
let apellido;
let correo;
let isNumber;
const flowRegistro = addKeyword(
  [
    "registro",
    "Registro",
    "registrate",
    "Registrate",
    "regist",
    "inicio",
    "Inicio",
    "iniciar",
    "Iniciar",
  ],
  { sensitive: true }
)
  .addAnswer(
    [
      "Favor de ingresar su *Número de identificador de  cliente*, este número consta de 6 dígitos.",
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
      if (ctx.body == "112233") {
        return endFlow({
          body: `Estimado participante. 😣
                    \nLe informamos que el número de identificador de cliente *${idCliente}*, proporcionado no está registrado en nuestra base de datos, por lo que le invitamos a rectificar el número correcto y volver a empezar su proceso de registro.
                    \nEn caso de que sea un error, le invitamos a contactar a nuestro equipo de atención a clientes enviando un correo electrónico a xxxx@capistrano.com para que su número sea dado de alta.
                    \n*Sí ingresaste algún dato incorrecto puedes volver a empezar tu registro escribindo el número 1 en cualquier momento.*
                    `,
        });
      }
      // VALIDACIÓN SÍ ESTATUS BD
      if (ctx.body == "112266") {
        return endFlow({
          body: `Estimado participante. 😣
                    \nLe informamos que según nuestra base de datos el registro a este consurso ya fue realizado previamente con la siguente información.
                    \n📅 Fecha de registro: *##/##/20##*
                    \n📱 Número telefónico con terminación: *XX XXXX XX07*
                    \n📧 Correo electrónico: *xxxx@gmail.com*
                    \nEn caso de que sea un error, le invitamos a contactar a nuestro equipo de atención a clientes enviando un correo electrónico a xxxx@capistrano.com para que su número sea dado de alta.
                    \n*Sí ingresaste algún dato incorrecto puedes volver a empezar tu registro escribindo el número 1 en cualquier momento.*`,
        });
      }
    }
  )
  .addAnswer(
    "Favor de proporcionar solo su(s) *Nombre(s)*",
    { capture: true },
    (ctx, { fallBack }) => {
      nombre = ctx.body;
      isNumber = Number(nombre);
      // VALIDAR TIPO DE ENTRADA NO NUMERICA
      if (!isNaN(isNumber)) return fallBack();
      // VALIDAR LONGITUD
      if (nombre.length < 3) return fallBack();
    }
  )
  .addAnswer(
    "Favor de proporcionar solo su(s) *Apellido(s)*",
    { capture: true },
    (ctx, { fallBack }) => {
      apellido = ctx.body;
      isNumber = Number(apellido);
      if (!isNaN(isNumber)) return fallBack();
      if (apellido.length < 3) return fallBack();
    }
  )
  .addAnswer(
    "Favor de proporcionar el *Correo electrónico* con el que se desea realizar el registro a este curso",
    { capture: true },
    (ctx, { fallBack }) => {
      correo = ctx.body;
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const validacionCorreo = regex.test(correo);
      console.log("Validando correo", validacionCorreo);
      if (!validacionCorreo) return fallBack();
    }
  )
  .addAnswer(
    "!Te deseamos mucha suerte¡ 🥇🍀🎁",
    null,
    async (ctx, { flowDynamic }) => {
      await flowDynamic(
        `Tu registro a sido completado con éxito ${nombre} ${apellido} 👏
    \nRecuerda que:
    \n1. Todas tus compras que superen tu objetivo semanal, sumarán puntos en tu cuenta de CAPISTRANO. Sabor que premia.
    \n2. Tus puntos los podras cambiar por electrodomésticos, equipos electrónicos, equipos para tu negocio, remodelaciones  y más.
    \n3. Para ser uno de los [_número de premios_] ganadores [_semanales o mensuales_], deberás ser uno de los ganadores con mayor puntaje.
    \n${nombre} ${apellido}, no dejes de participar y prepárate para  ganar con CAPISTRANO. Sabor que premia. 🎖💰
    \n¿Deseas conocer tu puntaje?
    \n*Escribe el número 0 para ingresar a tú menú principal*`
      );
    },
    [flowMenu]
  );

module.exports = flowRegistro;
