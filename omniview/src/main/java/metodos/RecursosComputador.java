/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package metodos;

import com.github.britooo.looca.api.core.Looca;
import com.mycompany.omniview.Connection;
import com.mycompany.omniview.ConnectionMysql;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

public class RecursosComputador {

    private String processador;
    private Integer bitMaquina;
    private String sistemaOperacional;
    private Integer arquiteturaSis;
    private Double memoriaRamTotal;
    private Double discoTotal;
    public String hostName;
    
    Log log = new Log();

    public RecursosComputador() {
    }

    AutenticarLogin autenticarLogin = new AutenticarLogin();
    Looca looca = new Looca();
    Connection config = new Connection();
    JdbcTemplate con = new JdbcTemplate(config.getDatasource());
    ConnectionMysql configMySQL = new ConnectionMysql();
    JdbcTemplate conSQL = new JdbcTemplate(configMySQL.getDataSourceSQL());

    public String getProcessador() {
        processador = looca.getProcessador().getNome();
        return processador;
    }

    public Integer getBitMaquina() {
        bitMaquina = looca.getSistema().getArquitetura();
        return bitMaquina;
    }

    public String getSistemaOperacional() {
        sistemaOperacional = looca.getSistema().getSistemaOperacional();
        return sistemaOperacional;
    }

    public Integer getArquiteturaSis() {
        arquiteturaSis = looca.getSistema().getArquitetura();
        return arquiteturaSis;
    }

    public Double getMemoriaRamTotal() {
        Long memoriaRamByte = looca.getMemoria().getTotal().longValue();
        memoriaRamTotal = memoriaRamByte / 1073741824.0;
        return memoriaRamTotal;
    }

    public Double getDiscoTotal() {
        Long discoByte = looca.getGrupoDeDiscos().getTamanhoTotal();
        discoTotal = discoByte / 1073741824.0;
        return discoTotal;
    }

    public String getHostname() {
        try {
            String Inet = InetAddress.getLocalHost().getHostName();
            hostName = Inet;

        } catch (UnknownHostException ex) {
            Logger.getLogger(RecursosComputador.class.getName()).log(Level.SEVERE, null, ex);
        }
        return hostName;
    }

    public String getIDMaquina() {

        List IdMaqBanco = con.queryForList("select ID from maquina where "
                + "hostName = ?", hostName);
        return IdMaqBanco.get(0).toString().replace("{ID=", "").replace("}", "");
    }

    public void inserirMaquinas(Integer estUsuario) {
        
        try {
        con.update("INSERT INTO MAQUINA(hostName,"
                + "tipo,sistemaOperacional,ramTotal,arquitetura,"
                + "processador,disco,Fk_EstMaq,reiniciar) VALUES "
                + " (?,null,?,?,?,?,?,?,0)", hostName, getSistemaOperacional(),
                getMemoriaRamTotal(),
                getArquiteturaSis(),
                getProcessador(),
                getDiscoTotal(), estUsuario);
        System.out.println("inserindo dados na máquina: " + this.hostName);
            
        } catch (Exception e) {
            log.emergencia(" inserção tabela maquina - [SQL]");
        }

<<<<<<< HEAD
        conSQL.update("INSERT INTO omniviewbd.maquina(hostName,"
                + "tipo,sistemaOperacional,ramTotal,arquitetura,"
                + "processador,disco,Fk_EstMaq) VALUES "
                + " (?,null,?,?,?,?,?,?)", hostName, getSistemaOperacional(),
                getMemoriaRamTotal(),
                getArquiteturaSis(),
                getProcessador(),
                getDiscoTotal(), estUsuario);
        System.out.println("inserindo dados na máquina pelo SQL: " + this.hostName);
=======
//        try {
//        conSQL.update("INSERT INTO omniviewbd.maquina(hostName,"
//                + "tipo,sistemaOperacional,ramTotal,arquitetura,"
//                + "processador,disco,Fk_EstMaq) VALUES "
//                + " (?,null,?,?,?,?,?,?)", hostName, getSistemaOperacional(),
//                getMemoriaRamTotal(),
//                getArquiteturaSis(),
//                getProcessador(),
//                getDiscoTotal(), estUsuario);
//        System.out.println("inserindo dados na máquina pelo SQL: " + this.hostName);
            
//        } catch (Exception e) {
//            log.emergencia(" inserção tabela maquina - [MySql]");
//        }
>>>>>>> 8fed949809aa9527abfdbd18e67013e81562512b
    }

}
