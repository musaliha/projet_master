package com.lib.library.soap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.lib.library.model.Livre;
import com.lib.library.service.LivreService;
import com.lib.library.soap.request.AjouterLivreRequest;
import com.lib.library.soap.request.ModifierLivreRequest;
import com.lib.library.soap.request.PreterLivreRequest;
import com.lib.library.soap.request.RetournerLivreRequest;
import com.lib.library.soap.request.SupprimerLivreRequest;
import com.lib.library.soap.response.AjouterLivreResponse;
import com.lib.library.soap.response.ModifierLivreResponse;
import com.lib.library.soap.response.PreterLivreResponse;
import com.lib.library.soap.response.RetournerLivreResponse;
import com.lib.library.soap.response.SupprimerLivreResponse;

@Endpoint
public class LivreEndpoint {

    private static final String NAMESPACE_URI = "http://example.com/bibliotheque";

    private final LivreService livreService;

    @Autowired
    public LivreEndpoint(LivreService livreService) {
        this.livreService = livreService;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "ajouterLivreRequest")
    @ResponsePayload
    public AjouterLivreResponse ajouterLivre(@RequestPayload AjouterLivreRequest request) {
        Livre livre = new Livre();
        livre.setTitre(request.getTitre());
        livre.setAuteur(request.getAuteur());
        livre.setDisponible(true);
        livreService.saveLivre(livre);

        AjouterLivreResponse response = new AjouterLivreResponse();
        response.setMessage("Livre ajouté avec succès !");
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "modifierLivreRequest")
    @ResponsePayload
    public ModifierLivreResponse modifierLivre(@RequestPayload ModifierLivreRequest request) {
        ModifierLivreResponse response = new ModifierLivreResponse();
        Livre livre = livreService.getLivreById(request.getLivreID());

        if (livre != null) {
            livre.setTitre(request.getTitre());
            livre.setAuteur(request.getAuteur());
            livreService.saveLivre(livre);
            response.setMessage("Livre modifié avec succès !");
        } else {
            response.setMessage("Erreur : Livre non trouvé !");
        }
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "supprimerLivreRequest")
    @ResponsePayload
    public SupprimerLivreResponse supprimerLivre(@RequestPayload SupprimerLivreRequest request) {
        SupprimerLivreResponse response = new SupprimerLivreResponse();
        Livre livre = livreService.getLivreById(request.getLivreID());

        if (livre != null) {
            livreService.deleteLivre(request.getLivreID());
            response.setMessage("Livre supprimé avec succès !");
        } else {
            response.setMessage("Erreur : Livre non trouvé !");
        }
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "preterLivreRequest")
    @ResponsePayload
    public PreterLivreResponse preterLivre(@RequestPayload PreterLivreRequest request) {
        PreterLivreResponse response = new PreterLivreResponse();
        Livre livre = livreService.getLivreById(request.getLivreID());

        if (livre != null && livre.isDisponible()) {
            livre.setDisponible(false);
            livreService.saveLivre(livre);
            response.setMessage("Livre prêté avec succès !");
        } else {
            response.setMessage("Erreur : Livre non disponible ou introuvable !");
        }
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "retournerLivreRequest")
    @ResponsePayload
    public RetournerLivreResponse retournerLivre(@RequestPayload RetournerLivreRequest request) {
        RetournerLivreResponse response = new RetournerLivreResponse();
        Livre livre = livreService.getLivreById(request.getLivreID());

        if (livre != null) {
            livre.setDisponible(true);
            livreService.saveLivre(livre);
            response.setMessage("Livre retourné avec succès !");
        } else {
            response.setMessage("Erreur : Livre introuvable !");
        }
        return response;
    }
}
