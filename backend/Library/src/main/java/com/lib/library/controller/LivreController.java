package com.lib.library.controller;

import com.lib.library.model.Livre;
import com.lib.library.service.LivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livres")
@CrossOrigin(origins = "http://localhost:4200")
public class LivreController {

    @Autowired
    private LivreService livreService;

    @GetMapping
    public List<Livre> getAllLivres() {
        return livreService.getAllLivres();
    }

    @GetMapping("/{id}")
    public Livre getLivreById(@PathVariable Long id) {
        return livreService.getLivreById(id);
    }

    @GetMapping("/disponibles")
    public List<Livre> getLivresDisponibles() {
        return livreService.getLivresDisponibles();
    }

    @PostMapping
    public Livre createLivre(@RequestBody Livre livre) {
        return livreService.saveLivre(livre);
    }

    @PutMapping("/{id}")
    public Livre updateLivre(@PathVariable Long id, @RequestBody Livre livre) {
        return livreService.updateLivre(id, livre);
    }

    @DeleteMapping("/{id}")
    public void deleteLivre(@PathVariable Long id) {
        livreService.deleteLivre(id);
    }
}
