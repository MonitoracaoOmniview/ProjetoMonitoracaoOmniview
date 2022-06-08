/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package user;

import com.mycompany.omniview.Connection;
import org.springframework.jdbc.core.JdbcTemplate;

public class User {
    Connection config = new Connection();
    JdbcTemplate con = new JdbcTemplate(config.getDatasource());

    private String email;
    private String senha;
    private Integer id;
    private String hostName;

    public User() {
    }

    public User(Integer Id, String email, String senha) {
        this.email = email;
        this.senha = senha;
        this.id = id;
    }
    //StringBuilder createStatement = new StringBuilder();
    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {

        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "email =" + email + "senha =" + senha;
    }

    
    
    
    
    
}
