package com.golpedopresente.controller;

//Classe controlador REST
import com.golpedopresente.model.Denuncia;
import com.golpedopresente.repository.DenunciaRepository;
import com.golpedopresente.service.GoogleSafeBrowsingService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/denuncias") // URL para acessar os endpoints
public class DenunciaController {

    @Autowired
    private DenunciaRepository repository;

    @Autowired
    private GoogleSafeBrowsingService safeBrowsing;

    @PostMapping // POST
    public Denuncia criarDenuncia(@RequestBody Denuncia denuncia) {
        boolean malicioso = safeBrowsing.verificarUrl(denuncia.getUrlSuspeita());
        denuncia.setVerificadoPeloGoogle(true);
        denuncia.setEMalicioso(malicioso);
        return repository.save(denuncia);
    }

    @GetMapping // GET
    public List<Denuncia> listarDenuncias() {
        return repository.findAll();
    }
}
