#!/bin/bash

echo "cadastro de usuario"

echo
echo "Entre com o nome do usuario: "
read usuario

while true; do
read -p "O nome de usuario inserido foi $usuario, esta correto? " yn
    case $yn in
        [Yy]* ) sudo adduser $usuario;echo "Adicionando" $usuario echo " no grupo de sudoers "
sudo adduser $usuario sudo;
sudo -d passwd $usuario
echo "Qual configuracao gostaria de executar?"
echo "1 - CLI"
echo "2 - GUI"
echo "3 - Cancelar"
read escolha;
case $escolha in
  1) bash ScriptConfiguraEC2.sh;;
  2) bash ScriptConfiguraEC2GUI.sh;;

  5) exit;;
  *) echo "opcao invalida, selecione 1, 2 ou 5";;
esac
  break;;
        [Nn]* ) exit;;
        * ) echo "Por favor insira yes ou no.";;
    esac
done
echo
