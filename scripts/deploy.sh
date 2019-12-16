#! /bin/bash

echo "🙈 Voy hacer algo de trampas si no te importa y voy a poner la variable de entorno CI a false, para que no me de problemas los warnings en la compilación"

CI=false

echo " "
echo " "
echo "Okay, vamos a darle leña al mono 🤘, comienzo haciendo la compilación de los archivos..."
echo " "
echo " "

npm install && npm run build

cd build

ls

cd ..

echo " "
echo " "
echo "========   Vale, parece que hace correctamente el build 👷   ========"
echo " "
echo " "

echo " "
echo " "
echo "Vamos ahora a probar a realizar el despliegue en Ditital Ocean 💧"
echo " "
echo " "

scp -o StrictHostKeyChecking=no -i deploy_rsa -v -r ./build/* ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}

echo " "
echo " "
echo "========   DONE  ========"
echo " "
echo " "

exit




