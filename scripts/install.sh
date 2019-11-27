#! /bin/bash

echo "Importing  SSH Key."

echo "REMOTE_USER = ${REMOTE_USER}"
echo "REMOTE_HOST = ${REMOTE_HOST}"

openssl aes-256-cbc -K $encrypted_ff401662a16b_key -iv $encrypted_ff401662a16b_iv -in deploy-travis.enc -out deploy-travis -d

eval "$(ssh-agent -s)"

chmod 600 deploy-travis

ssh-add deploy-travis
