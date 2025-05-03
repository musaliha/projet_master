package com.lib.library.service;

import com.lib.library.model.Livre;
import com.lib.library.repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivreService {

    @Autowired
    private LivreRepository livreRepository;

    public List<Livre> getAllLivres() {
        return livreRepository.findAll();
    }

    public Livre getLivreById(Long id) {
        return livreRepository.findById(id).orElse(null);
    }

    public List<Livre> getLivresDisponibles() {
        return livreRepository.findByDisponible(true);
    }

    public Livre saveLivre(Livre livre) {
        return livreRepository.save(livre);
    }

    public Livre updateLivre(Long id, Livre livre) {
        Optional<Livre> existing = livreRepository.findById(id);
        if (existing.isPresent()) {
            Livre toUpdate = existing.get();
            toUpdate.setTitre(livre.getTitre());
            toUpdate.setAuteur(livre.getAuteur());
            toUpdate.setDisponible(livre.isDisponible());
            return livreRepository.save(toUpdate);
        } else {
            throw new RuntimeException("Livre non trouvé avec id : " + id);
        }
    }

    public void deleteLivre(Long id) {
        livreRepository.deleteById(id);
    }
}
