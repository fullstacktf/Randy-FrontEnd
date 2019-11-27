#! /bin/bash

echo "Deploying on digitalocean"

COMMAND="cd ${REMOTE_PATH} && git pull"

ssh -o StrictHostKeyChecking=no -i deploy-travis -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
