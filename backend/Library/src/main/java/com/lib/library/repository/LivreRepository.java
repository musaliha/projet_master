package com.lib.library.repository;

import com.lib.library.model.Livre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LivreRepository extends JpaRepository<Livre, Long> {
    List<Livre> findByDisponible(boolean disponible);
}
