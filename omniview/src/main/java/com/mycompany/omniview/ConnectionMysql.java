/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.omniview;

import org.apache.commons.dbcp2.BasicDataSource;

public class ConnectionMysql {

    private BasicDataSource dataSource;

    public BasicDataSource getDataSourceSQL() {
        return dataSource;
    }

    public ConnectionMysql() {
        try {
            this.dataSource = new BasicDataSource();
            //this.dataSource.setDriverClassName("org.h2.Driver");
            this.dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
            //this.datasource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            //this.dataSource.setUrl("jdbarh2:file:./meu_banco");
            this.dataSource.setUrl("jdbc:mysql://localhost:3306/omniviewbd?useTimezone=true&serverTimezone=UTC");
         
            // usuário padrao2
            //this.dataSource.setUsername("sa");
            // senha padrao2
            //this.dataSource.setPassword("");
            // Não irá funcionar se você não criar um container exatamente igual o meu.
            // usuário utilizado em um container MySQL
            this.dataSource.setUsername("root");
            // senha padrao utilizada no container MySQL
            this.dataSource.setPassword("root");
            // Azure
            //this.datasource.setUsername("admin-Monitech");
            //this.datasource.setPassword("2ads#grupo3");
        } catch (Exception e) {
            System.out.println("erro ao conectar com o mysql");

        }
    }
}
