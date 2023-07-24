# ChatBoot

Chat boot para realizar respuestas automáticas de acuerdo a un flujo definido con whatsApp

- Para activar la funcionalidad de notificaciones se debe escribir: **Enviar notificaciones a participantes**
- Responde **Ingresa tu clave**
- Validar archivo **app.js** linea 22

## Installation

- [NodeJS > 18](https://nodejs.org/es)
- [Editor de texto](https://code.visualstudio.com/download)

```bash
npm i
```

## Usage

Una vez instaladas las dependencias

```bash
npm start

## Abrir navegador
http://localhost:8080/
## Escanear el QR que se muestra para vincular teléfono
```

## Deployment

- Debes tener una cuenta de pago de GCP
- El deploy se realizara con AppEngine modo flexible [GCP](https://cloud.google.com/cloud-console)
- Abrir cloud Shell parte superior derecha en la consola de GCP
- Clonar repositorio **git clone URL del repositorio**
- Modificar el archivo dentro de **config/credentials.json** y agregar la cuenta de servicios para conexión con **Firestore**
- Ingresar a la carpeta con el código fuente, se encuentra un archivo nombrado **app.yaml** con la configuración del despliegue
- Una vez en la carpeta agregar el comando

```bash
gcloud app deploy
## Pregunta si deseas continuar con el despliegue agregar Y
```

- Esperar a que realice el deploy y abrir el navegador con la URL por defecto

## License

[MIT](https://choosealicense.com/licenses/mit/)
