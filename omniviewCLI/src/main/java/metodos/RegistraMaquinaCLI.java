/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package metodos;

import java.util.Scanner;

/**
 *
 * @author pedro
 */
public class RegistraMaquinaCLI {

    Scanner leitor = new Scanner(System.in);
    AutenticarLogin login = new AutenticarLogin();

    public void escolhaMaquina() {
        Integer escolha;

        System.out.println("Cadastre uma maquina");
        System.out.println("Digite uma opcao"
                + "\n (1) - Registrar Caixa"
                + "\n (2) - Registrar Totem");
        escolha = leitor.nextInt();
        while (escolha != 1 && escolha != 2) {
            System.out.println("Digite uma opcao valida!");
            escolha = leitor.nextInt();
        }
        switch (escolha) {
            case 1:
                login.setCheckCaixa(true);
                System.out.println("cadastrou caixa");
                login.RegistrarCaixa();

                break;
            case 2:
                login.setCheckTotem(true);
                System.out.println("cadastrou totem");
                login.RegistrarTotem();
                break;
            default:
                System.out.println("Erro");
                break;

        }

    }

}
