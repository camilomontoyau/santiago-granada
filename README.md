# Prueba Talenta365

Prueba desarrollada para Talenta365 en ReactJs, Express y Mysql

# Poner en marcha nuestro proyecto

Inicialmente debemos tener instalado y configurado nuestro gestor de bases de datos Mysql
Nos dirigimos a  `./santiago-granada/api/config/config.json` aca tenemos que realizar la configuracion de acceso a nuestra base de datos, como nombre de usuario, nombre de la base de datos, contraseña etc... y tenemos que crear la respectiva base de datos en nuestro gestor, por defecto se llama `star_wars_db`.

Una vez realizada la configuracion previa de la base de datos debemos dirigirnos, desde una consola de comandos a `./santiago-granada` alli debemos instalar las dependencias necesarias, para esto:
- `npm install` Para instalar dependencias
- `npm start` Para iniciar nuestra aplicacion web

Posteriormente vamos a `./santiago-granada/api` y ejecutamos
- `npm install` Para instalar dependencias
- `sequelize db:migrate` Para correr las migraciones de la base de datos
- `npm start` El servidor esta configurado para, una vez iniciar, llenar automaticamente los registros de la base de datos.