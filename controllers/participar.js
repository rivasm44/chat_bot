const { addKeyword } = require('@bot-whatsapp/bot')
const flowMenuOp1 = addKeyword(['1', 'uno', 'participar'])
    .addAnswer(`*Recuerda que:* 🙌
                \n🎯 Todas tus compras que superen tu objetivo semanal, sumarán puntos en tu cuenta de CAPISTRANO. Sabor que premia.
                \n🎯 Tus puntos los podrás canjear por electrodomésticos, equipos electrónicos, equipos para tu negocio, remodelaciones y más.
                \n🎯 Para ser uno de los [_número de premios_] ganadores [_semanales o mensuales_], deberás ser uno de los ganadores con mayor puntaje.
                \n¿Deseas conocer más? 🤔 
                \n👉 Cómo participar\n👉 Lista de premios\n👉 Mi puntaje\n👉 Dudas, comentarios o sugerencias
                \n*Envía el número 0 para regresar al menú principal.* `) 

module.exports = flowMenuOp1