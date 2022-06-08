package metodos;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Log {
    
//    String msg;
        String strLocalDate = LocalDateTime.now().format
        (DateTimeFormatter.ofPattern("dd/MM/yyyy")).toString();

    public void gerarLog(String msg) {
 
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
            bufferedWriter.write("\n" + dataDeHoje.toString()  + ": Maquina " + recMaq.getHostname() + msg);
//            out.append("Maquina " + recMaq.getHostname() + " Registrada em: " + dataDeHoje.toString() + "\n");
            bufferedWriter.close();

        } catch (IOException e) {
            e.printStackTrace();
            e.getMessage();
        }
    }
}
