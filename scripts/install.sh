#! /bin/bash

echo "Importing  SSH Key."

echo "REMOTE_USER = ${REMOTE_USER}"
echo "REMOTE_HOST = ${REMOTE_HOST}"

openssl aes-256-cbc -K $encrypted_af8de67677e8_key -iv $encrypted_af8de67677e8_iv -in travis-deploy-do-fron.enc -out keys/travis-deploy-do-fron -d

eval "$(ssh-agent -s)"

chmod 600 keys/travis-deploy-do-fron

ssh-add keys/travis-deploy-do-fron
