/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package metodos;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Log {
    
      public void emergencia(String texto){
            gerarLog( " [ERRO] ", texto);
    }
    
    public void normalizado(String texto){
            gerarLog(" [OK] ", texto);
    }

    public void gerarLog(String tipo, String msg) {
 
        metodos.RecursosComputador recMaq = new RecursosComputador();
        File arquivoLog = new File("logAplicacao.txt");

        try {
            if (!arquivoLog.exists()) {
                System.out.println("Criando novo Arquivo log");
                arquivoLog.createNewFile();
            }
        
            FileWriter fileWriter = new FileWriter(arquivoLog, true);
            Timestamp dataDeHoje = new Timestamp(System.currentTimeMillis());
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write("\n" + "["+dataDeHoje.toString()+"] " + recMaq.getHostname() + tipo + msg);
            bufferedWriter.close();

        } catch (IOException e) {
            e.printStackTrace();
            e.getMessage();
        }
    }
}
