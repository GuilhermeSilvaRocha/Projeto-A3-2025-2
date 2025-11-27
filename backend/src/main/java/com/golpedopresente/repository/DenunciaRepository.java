package com.golpedopresente.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.golpedopresente.model.Denuncia;

public interface DenunciaRepository extends MongoRepository<Denuncia, String> {}

