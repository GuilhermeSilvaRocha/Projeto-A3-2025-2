package com.golpedopresente.controller;

import com.golpedopresente.model.Denuncia;
import com.golpedopresente.repository.DenunciaRepository;
import com.golpedopresente.service.GoogleSafeBrowsingService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@CrossOrigin(origins = "*") 
@RequestMapping("/api/denuncias")
public class DenunciaController {

    @Autowired
    private DenunciaRepository repository;

    @Autowired
    private GoogleSafeBrowsingService safeBrowsing;

    @PostMapping
    public Denuncia criarDenuncia(@RequestBody Denuncia denuncia) {
        boolean malicioso = safeBrowsing.verificarUrl(denuncia.getUrlSuspeita());
        denuncia.setVerificadoPeloGoogle(true);
        denuncia.setEMalicioso(malicioso);
        return repository.save(denuncia);
    }

    @GetMapping
    public List<Denuncia> listarDenuncias() {
        return repository.findAll();
    }
}
