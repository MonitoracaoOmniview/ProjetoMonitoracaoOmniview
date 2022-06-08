#!/bin/bash
echo "Atualizando pacotes"
sudo apt update && sudo apt upgrade -y
 

echo "  ██████  ███    ███ ███    ██ ██ ██    ██ ██ ███████ ██     ██ "
echo " ██    ██ ████  ████ ████   ██ ██ ██    ██ ██ ██      ██     ██ "
echo " ██    ██ ██ ████ ██ ██ ██  ██ ██ ██    ██ ██ █████   ██  █  ██ "
echo " ██    ██ ██  ██  ██ ██  ██ ██ ██  ██  ██  ██ ██      ██ ███ ██ "
echo "  ██████  ██      ██ ██   ████ ██   ████   ██ ███████  ███ ███  "


echo 
echo

echo "  ██████ ██      ██ "
echo " ██      ██      ██ "
echo " ██      ██      ██ "
echo " ██      ██      ██ "
echo "  ██████ ███████ ██ " 


                     
usuario=$(whoami)
sudo -d passwd $usuario

echo "procurando o zip Instalador zip"
which zip
if [ $? = 0 ]
then echo "Já possui zip instalado"
else echo "Instalando zip"
sudo apt install zip
echo "adicionando o caminho sdk ao curl"
curl -s "https://get.sdkman.io" | bash

fi
echo "reiniciando terminal"
source "$HOME/.sdkman/bin/sdkman-init.sh"


echo "Checando se Java ja esta instalado"
which java
if [ $? = 0 ]
then echo "Já possui java instalado"
else echo "Instalando java"
sdk install java 11.0.12.7.1-amzn
fi
echo "versão do instalada: "
java -version


echo "procurando o docker"
which docker
if [ $? = 0 ]
then echo "Já possui docker instalado"
else echo "Instalando docker"
sudo apt install docker.io
fi
echo "iniciando o docker no sistema"
sudo systemctl start docker
sudo systemctl enable docker

echo "baixando mysql"
sudo docker pull mysql:8.0.16
echo "criando o banco de dados"
sudo docker build -t omniview_img:1.0 .
echo "executando mysql"
sudo docker run -d -p 3306:3306 --name omniview omniview_img:1.0

clear

echo " ███████ ██ ███    ███     ██████   █████      ██ ███    ██ ███████ ████████  █████  ██       █████   ██████  █████   ██████   "
echo " ██      ██ ████  ████     ██   ██ ██   ██     ██ ████   ██ ██         ██    ██   ██ ██      ██   ██ ██      ██   ██ ██    ██  "
echo " █████   ██ ██ ████ ██     ██   ██ ███████     ██ ██ ██  ██ ███████    ██    ███████ ██      ███████ ██      ███████ ██    ██  "
echo " ██      ██ ██  ██  ██     ██   ██ ██   ██     ██ ██  ██ ██      ██    ██    ██   ██ ██      ██   ██ ██      ██   ██ ██    ██  "
echo " ██      ██ ██      ██     ██████  ██   ██     ██ ██   ████ ███████    ██    ██   ██ ███████ ██   ██  ██████ ██   ██  ██████   "
                                                                                                                             
cd omniviewCLI/
cd target/
java -jar omniview-1.0-SNAPSHOT-jar-with-dependencies.jar

