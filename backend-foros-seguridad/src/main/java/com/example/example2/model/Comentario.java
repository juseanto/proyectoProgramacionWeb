package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Comentario {

    @Id
    @GeneratedValue
    private Long id;

    private String contenido;
    private String creador;

    @ManyToOne
    private Tema tema;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the contenido
     */
    public String getContenido() {
        return contenido;
    }

    /**
     * @param name the name to set
     */
    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    /**
     * @return the nombreCreador
     */
    public String getCreador() {
        return creador;
    }

    /**
     * @param name the name to set
     */
    public void setCreador(String creador) {
        this.creador = creador;
    }

    /**
     * @return the fechaCreacion
     */
    /*
     * public String getFechaCreacion() { return fechaCreacion; }
     */

    /**
     * @param name the name to set
     */
    /*
     * public void setFechaCreacion(String fechaCreacion) { this.fechaCreacion =
     * fechaCreacion; }
     */

    /**
     * @return the tema
     */
    public Tema getTema() {
        return tema;
    }

    /**
     * @param name the name to set
     */
    public void setTema(Tema tema) {
        this.tema = tema;
    }

}
