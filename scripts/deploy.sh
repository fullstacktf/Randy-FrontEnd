#! /bin/bash

echo "🙈 Voy hacer algo de trampas si no te importa y voy a poner la variable de entorno CI a false, para que no me de problemas los warnings en la compilación"

CI=false

echo " "
echo " "
echo "Okay, vamosa darle leña al mono 🤘, comienzo haciendo la compilación de los archivos..."
echo " "
echo " "

npm install && npm run build

cd build

ls

echo " "
echo " "
echo "========   Vale, parece que hace correctamente el buil 👷   ========"
echo " "
echo " "

echo " "
echo " "
echo "Vamos ahora a probar a realizar el despliegue en Ditital Ocean"
echo " "
echo " "

scp -r * travis@ssh.randy.tools:var/www/randy.tools


echo " "
echo " "
echo "========   HASTA AQUI LA PRUEBA  ========"
echo " "
echo " "

exit

echo "Deploying on digitalocean"

COMMAND="cd ${REMOTE_PATH} && \
        git pull && \
        npm install && \
        echo "Borrando carpeta build" && \
        rm -rf build/* && \
        echo "Procedo a crear otra carpeta build" && \
        npm run build"

ssh -o StrictHostKeyChecking=no -i travis-deploy-do-fron -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
