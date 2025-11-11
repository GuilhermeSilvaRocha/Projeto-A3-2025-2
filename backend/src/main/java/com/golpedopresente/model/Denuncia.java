package com.golpedopresente.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Document(collection = "denuncias") //Marcador do MongoDB
public class Denuncia {
    @Id
    //Campos que serão armazenados no banco
    private String id;
    private String urlSuspeita;
    private String descricao;
    private boolean verificadoPeloGoogle;
    private boolean eMalicioso;
    private LocalDateTime dataEnvio = LocalDateTime.now();
}
