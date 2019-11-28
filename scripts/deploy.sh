#! /bin/bash

echo "Deploying on digitalocean"

COMMAND="cd ${REMOTE_PATH} && git pull"

ssh -o StrictHostKeyChecking=no -i travis-deploy-do-fron -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
