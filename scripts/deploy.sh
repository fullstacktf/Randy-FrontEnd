#! /bin/bash

echo "Deploying on digitalocean"

COMMAND="cd ${REMOTE_PATH} && \
        git pull && \
        npm install && \
        echo "Borrando carpeta build" && \
        rm -rf build/* && \
        echo "Procedo a crear otra carpeta build" && \
        npm run build"

ssh -o StrictHostKeyChecking=no -i travis-deploy-do-fron -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
