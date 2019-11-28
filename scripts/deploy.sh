#! /bin/bash

echo "Deploying on digitalocean"

COMMAND="cd ${REMOTE_PATH} && git pull"

npm run build

git subtree push --prefix build origin production

ssh -o StrictHostKeyChecking=no -i travis-deploy-do-fron -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
