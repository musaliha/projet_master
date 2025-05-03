package com.lib.library.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long livreId;
    private Long userId;

    private String dateReservation;

    // Constructeurs
    public Reservation() {
    }

    public Reservation(Long livreId, Long userId, String dateReservation) {
        this.livreId = livreId;
        this.userId = userId;
        this.dateReservation = dateReservation;
    }

    // Getters et Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getLivreId() {
        return livreId;
    }

    public void setLivreId(Long livreId) {
        this.livreId = livreId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getDateReservation() {
        return dateReservation;
    }

    public void setDateReservation(String dateReservation) {
        this.dateReservation = dateReservation;
    }
}
