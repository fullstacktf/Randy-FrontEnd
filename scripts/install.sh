#! /bin/bash

echo "Importing  SSH Key."

echo "REMOTE_USER = ${REMOTE_USER}"
echo "REMOTE_HOST = ${REMOTE_HOST}"

echo -e "Host ssh.randy.tools\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

echo " "
echo " "
echo "Hago el despligue de las contraseñas"
echo " "
echo " "

openssl aes-256-cbc -K $encrypted_af8de67677e8_key -iv $encrypted_af8de67677e8_iv -in deploy_rsa.enc -out deploy_rsa -d


echo " "
echo " "
echo "Las meto en el ssh-agent"
echo " "
echo " "

eval "$(ssh-agent -s)"

chmod 600 deploy_rsa

ssh-add deploy_rsa

echo " "
echo " "
echo "Listo 😜"
echo " "
echo " "
