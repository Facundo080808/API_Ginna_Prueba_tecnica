Proyecto Backend
Este es un proyecto backend desarrollado con Node.js y MongoDB. A continuación, te proporciono las instrucciones para ejecutar el servidor en tu máquina local.

Requisitos previos
Tener una cuenta de MongoDB Atlas para crear un cluster de MongoDB.

Tener instalado Node.js y npm en tu máquina. Puedes verificarlo con los siguientes comandos:


node -v
npm -v
Instrucciones para ejecutar el servidor
Clonar el repositorio:

Si no lo has hecho aún, clona el repositorio en tu máquina:


git clone <https://github.com/Facundo080808/API_Ginna_Prueba_tecnica.git>
Instalar dependencias:

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:


npm install

Configurar MongoDB Atlas:

Crea un cluster en MongoDB Atlas.
Obtén la URI de conexión para tu base de datos.
Asegúrate de incluir esta URI de conexión en un archivo de configuración en el proyecto, por ejemplo, en un archivo .env con la siguiente variable:

MONGODB_URI=<tu-uri-del-cluster>
Ejecutar el servidor:

Una vez que hayas configurado MongoDB y hayas instalado las dependencias, puedes iniciar el servidor con el siguiente comando:


npm start
El servidor debería estar corriendo en http://localhost:1000.

Fin de las instrucciones
¡Eso es todo! Ahora deberías tener el servidor corriendo en tu máquina local.