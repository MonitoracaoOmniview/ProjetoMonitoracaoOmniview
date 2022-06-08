package metodos;

import com.mycompany.omniview.Connection;
import java.util.List;
import javaswing.TelaLogin;

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
    metodos.Log log = new Log();

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

    public static void AbrirLogin() {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaLogin().setVisible(true);
            }

        });

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
        
        TelaLogin teste = new TelaLogin();

        List<User> usuario = con.query("SELECT EMAIL, SENHA FROM USUARIO "
                + "WHERE EMAIL =? and SENHA =?",
                new BeanPropertyRowMapper<>(User.class), email, senha);

        if (usuario.isEmpty()) {
            JOptionPane.showMessageDialog(null, "Acesso negado \n Usuário ou "
                    + "senha incorretos");
            log.emergencia(" usuario não autenticado ");

        } else {
            setUserAutenticado(true);
            regMaq.getHostname();
            this.email = emailUsuarioBanco;
            JOptionPane.showMessageDialog(null, "Usuario Autenticado");
            cnstBanco.getFKEst(email);
            //cnstBanco.getFKEst(emailFK.getEmail());
            regMaq.inserirMaquinas(cnstBanco.getFKEst(email));
            
            medMaq.inserirMedicao();
            slack.alertaRam(medMaq.getMemoriaRam(), regMaq.getMemoriaRamTotal(), regMaq.getHostname());
            slack.alertaDisco(medMaq.getDiscoDisponivel(), regMaq.getDiscoTotal(), regMaq.getHostname());
            FkEstt = cnstBanco.getFKEst(email);
            log.normalizado(" usuario autenticado ");
            
        }

    }

    public void RegistrarCaixa(java.awt.event.ActionEvent evt,
            Boolean checkCaixa) {
        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());
        metodos.ConsultaBanco cnstBanco = new ConsultaBanco();

        if (userAutenticado == true) {
            if (checkCaixa == true) {
                JOptionPane.showMessageDialog(null, "Você cadastrou um Caixa!");
                con.update("UPDATE MAQUINA SET TIPO='C' WHERE ID = ?", cnstBanco.getIDMaquina());
                List updateMaq = con.queryForList("SELECT * FROM "
                        + "MAQUINA  WHERE ID =?", cnstBanco.getIDMaquina());
                updateMaq.get(0).toString().replace("{EMAIL=", "").replace("}", "");
                System.out.println(updateMaq);
                System.out.println("Caixa cadastrado no ID: "
                        + cnstBanco.getIDMaquina());
                log.normalizado(" caixa cadastrado ");
                
            } else {
                System.out.println(" caixa nao cadastrado ");
                log.emergencia(" caixa não cadastrado ");
                
            }

        }
    }

    public void RegistrarTotem(java.awt.event.ActionEvent evt,
            Boolean checkTotem) {
        Connection config = new Connection();
        JdbcTemplate con = new JdbcTemplate(config.getDatasource());
        metodos.ConsultaBanco cnstBanco = new ConsultaBanco();

        if (userAutenticado == true) {
            if (checkTotem = true) {
                JOptionPane.showMessageDialog(null, "Você cadastrou um Totem!");
                con.update("UPDATE MAQUINA SET TIPO='T' WHERE ID = ?", cnstBanco.getIDMaquina());
                List updateMaq = con.queryForList("SELECT * FROM "
                        + "MAQUINA WHERE ID = ?", cnstBanco.getIDMaquina());
                updateMaq.get(0).toString().replace("{EMAIL=", "").replace("}", "");
                System.out.println(updateMaq);
                System.out.println("Totem cadastrado no ID: "
                        + cnstBanco.getIDMaquina());
                log.normalizado(" totem cadastrado ");

            } else {
                System.out.println(" totem nao cadastrado ");
                log.emergencia(" caixa não cadastrado ");
            }

        }

    }

}
