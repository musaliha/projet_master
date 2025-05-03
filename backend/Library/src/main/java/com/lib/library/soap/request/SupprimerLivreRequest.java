package com.lib.library.soap.request;

public class SupprimerLivreRequest {
	 private Long livreID;
	    private String titre;
	    private String auteur;

	 // Getters
	    public Long getLivreID() {
	        return livreID;
	    }

	    public String getTitre() {
	        return titre;
	    }

	    public String getAuteur() {
	        return auteur;
	    }

	    // Setters
	    public void setLivreID(Long livreID) {
	        this.livreID = livreID;
	    }

	    public void setTitre(String titre) {
	        this.titre = titre;
	    }

	    public void setAuteur(String auteur) {
	        this.auteur = auteur;
	    }
}
