package metodos;

import com.mycompany.omniview.Connection;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;

public class ConsultaBanco {

    Integer reiniciarM = 0;
    List reiniciar = new ArrayList();
    Connection config = new Connection();
    JdbcTemplate con = new JdbcTemplate(config.getDatasource());
    AutenticarLogin al = new AutenticarLogin();
    metodos.RecursosComputador reqMaq = new RecursosComputador();

    public Integer consultaReiniciar() {
        reiniciar = con.queryForList("select reiniciar from maquina where id = ?", getIDMaquina());
        String reiniciarString = reiniciar.get(0).toString().replace("{reiniciar=", "").replace("}", "");
        reiniciarM = Integer.parseInt(reiniciarString);
        System.out.println("String " + reiniciarString);
        System.out.println("Integer" + reiniciarM);
        return reiniciarM;
    }

    public void checaReiniciar() throws IOException {
        if (reiniciarM == 1) {
            con.update("UPDATE maquina SET reiniciar = 0 where id = ?", getIDMaquina());
            Runtime.getRuntime().exec("reboot");

            System.out.println(String.format("Maquina %s reiniciando", reqMaq.hostName));

        } else {
            System.out.println("Consultando maquina");
        }

    }

    //Consulta FKEstUser da tabela Usuario
    public Integer getFKEst(String email) {
        return con.queryForObject("SELECT FK_EstUser FROM USUARIO WHERE email = ? ",
                Integer.class,
                email);
    }

    public String getIDMaquina() {
        List IdMaqBanco = con.queryForList("select ID from Maquina WHERE hostName = ? ORDER BY id DESC",
                reqMaq.getHostname());
        return IdMaqBanco.get(0).toString().replace("{ID=", "").replace("}", "");
    }

}
