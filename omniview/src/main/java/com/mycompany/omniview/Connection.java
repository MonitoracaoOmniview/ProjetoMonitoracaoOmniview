/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.omniview;

import com.mysql.cj.xdevapi.Statement;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class Connection {

    private BasicDataSource datasource;

    // Exemplo de configuração utilizando H2
    // Obs. O código comentado é um exemplo de como se conectar ao mysql
    public Connection() {
    
        this.datasource = new BasicDataSource();
        //this.datasource.setDriverClassName("jdbc:sqlserver://meubanco.database.windows.net/meu_banco");
        this.datasource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        this.datasource.setUrl( "jdbc:sqlserver://svr-omniview.database.windows.net:1433;database=meu_banco;user=admin-ominiview@svr-omniview;password={2ads#grupo7};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;");
       
        //this.datasource.setUrl("jdbc:mysql://localhost:3306/omniview?useTimezone=true&serverTimezone=UTC");
        this.datasource.setUsername("admin-ominiview");
        this.datasource.setPassword("2ads#grupo7");

        // Não irá funcionar se você não criar um container exatamente igual o meu.
        // usuário utilizado em um container MySQL
        //this.datasource.setUsername("root");
        // senha padrao utilizada no container MySQL
        //this.datasource.setPassword("teste");
           
    }

    public BasicDataSource getDatasource() {
        return datasource;
    }
    
}
