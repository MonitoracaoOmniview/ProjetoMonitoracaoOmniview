package com.mycompany.omniview;

import java.util.Scanner;
import metodos.AutenticarLogin;
import user.User;

public class LoginCLI {

    public static void main(String[] args) {
        metodos.AutenticarLogin login = new AutenticarLogin();
        Scanner leitor = new Scanner(System.in);
        System.out.println("=".repeat(71)
                + "\nOMNIVIEW\n"
                + "=".repeat(71));
        System.out.println("Digite o email cadastrado");
        String email = leitor.nextLine();
        System.out.println("Digite a senha cadastrada");
        String senha = leitor.nextLine();
        User usuario = new User(01, email, senha);
        login.AutenticarLogin(email, senha, usuario.getEmail(), usuario.getSenha());
        

    }
}
