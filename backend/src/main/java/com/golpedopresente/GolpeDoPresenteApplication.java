package com.golpedopresente;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication //Classe principal da aplicação Spring Boot
public class GolpeDoPresenteApplication {


    public static void main(String[] args) {
        // Inicia o server Spring Boot
        System.out.println("Iniciando aplicação Golpe do Presente...");

        SpringApplication.run(GolpeDoPresenteApplication.class, args);
        
        System.out.println("Servidor Spring Boot iniciado com sucesso em http://localhost:4000");
    }
}
