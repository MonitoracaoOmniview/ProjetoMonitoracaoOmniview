package metodos;

import com.mycompany.omniview.Connection;
import com.mycompany.omniview.LoginCLI;
import java.util.List;
import java.util.Scanner;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.swing.JOptionPane;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import user.User;

public class AutenticarLogin {

    private String email;
    private String senha;
    private String id;
    public Integer FkEstt;
    private boolean userAutenticado = false;
    private boolean checkCaixa = false;
    private boolean checkTotem = false;
    metodos.Log log = new Log();

    public boolean isCheckCaixa() {
        return checkCaixa;
    }

    public void setCheckCaixa(boolean checkCaixa) {
        this.checkCaixa = checkCaixa;
    }

    public boolean isCheckTotem() {
        return checkTotem;
    }

    public void setCheckTotem(boolean checkTotem) {
        this.checkTotem = checkTotem;
    }

    public boolean isUserAutenticado() {
        return userAutenticado;
    }

    public void setUserAutenticado(boolean userAutenticado) {
        this.userAutenticado = userAutenticado;
    }

    public AutenticarLogin(String email, String senha) {
        this.email = email;
        this.senha = senha;
        this.id = id;
    }

    public AutenticarLogin() {
    }

    public String getEmail() {
        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());
        List emailUsuariosBanco = con.queryForList("SELECT EMAIL FROM "
                + "USUARIO WHERE EMAIL = ?", email);
        return emailUsuariosBanco.get(0).toString().replace("{EMAIL=", "").replace("}", "");

    }

    public String getSenha() {
        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());

        List senhaUsuariosBanco = con.queryForList("SELECT SENHA FROM "
                + "USUARIO WHERE SENHA = ?", senha);
        return senhaUsuariosBanco.get(0).toString().replace("{SENHA=", "").replace("}", "");
    }

    public String getId() {
        return this.id;
    }

    public void AutenticarLogin(String email, String senha,
            String emailUsuarioBanco, String senhaUsuarioBanco) {

        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());
        metodos.RecursosComputador regMaq = new RecursosComputador();
        metodos.MedicoesComputador medMaq = new MedicoesComputador();
        metodos.ConsultaBanco cnstBanco = new ConsultaBanco();
        metodos.AutenticarLogin emailFK = new AutenticarLogin();
        metodos.AlertasSlack slack = new AlertasSlack();
        metodos.Log log = new Log();
        Scanner leitor = new Scanner(System.in);
        RegistraMaquinaCLI registrarMaq = new RegistraMaquinaCLI();

        do {
            LoginCLI cli = new LoginCLI();

            List<User> usuario = con.query("SELECT EMAIL, SENHA FROM USUARIO "
                    + "WHERE EMAIL =? and SENHA =?",
                    new BeanPropertyRowMapper<>(User.class), email, senha);

            if (email.isEmpty() && (senha.isEmpty())) {
                System.out.println("Usuario invalido");
            } else {
                System.out.println("Usuario autenticado");
                setUserAutenticado(true);

                regMaq.getHostname();
                this.email = emailUsuarioBanco;

                FkEstt = cnstBanco.getFKEst(email);

                cnstBanco.getFKEst(email);
                regMaq.inserirMaquinas(cnstBanco.getFKEst(email));

                registrarMaq.escolhaMaquina();
                //cnstBanco.getFKEst(emailFK.getEmail());

                medMaq.inserirMedicao();
                slack.alertaRam(medMaq.getMemoriaRam(), regMaq.getMemoriaRamTotal(), regMaq.getHostname());
                slack.alertaDisco(medMaq.getDiscoDisponivel(), regMaq.getDiscoTotal(), regMaq.getHostname());
                FkEstt = cnstBanco.getFKEst(email);
                log.gerarLog(" Login bem sucedido ");

            }

        } while (userAutenticado = false);

    }

    public void RegistrarCaixa() {
        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());
        metodos.ConsultaBanco cnstBanco = new ConsultaBanco();

        if (userAutenticado == true) {
            if (checkCaixa == true) {
                System.out.println("Você cadastrou um Caixa!");
                con.update("UPDATE MAQUINA SET TIPO='C' WHERE ID = ?", cnstBanco.getIDMaquina());
                List updateMaq = con.queryForList("SELECT * FROM "
                        + "MAQUINA  WHERE ID =?", cnstBanco.getIDMaquina());
                updateMaq.get(0).toString().replace("{EMAIL=", "").replace("}", "");
                System.out.println(updateMaq);
                System.out.println("Caixa cadastrado no ID: "
                        + cnstBanco.getIDMaquina());
                log.gerarLog(" caixa cadastrado ");

            } else {
                System.out.println(" caixa nao cadastrado ");

            }

        }
    }

    public void RegistrarTotem() {
        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());
        metodos.ConsultaBanco cnstBanco = new ConsultaBanco();

        if (userAutenticado == true) {
            if (checkTotem = true) {
                System.out.println( "Você cadastrou um Totem!");
                con.update("UPDATE MAQUINA SET TIPO='T' WHERE ID = ?", cnstBanco.getIDMaquina());
                List updateMaq = con.queryForList("SELECT * FROM "
                        + "MAQUINA WHERE ID = ?", cnstBanco.getIDMaquina());
                updateMaq.get(0).toString().replace("{EMAIL=", "").replace("}", "");
                System.out.println(updateMaq);
                System.out.println("Totem cadastrado no ID: "
                        + cnstBanco.getIDMaquina());
                log.gerarLog("totem cadastrado ");

            } else {
                System.out.println("totem nao cadastrado");
            }

        }

    }
}