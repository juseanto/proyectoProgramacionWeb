package com.example.example2.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tema {

    @Id
    @GeneratedValue
    private Long id;

    private String titulo;
    private String contenido;
    private String fechaCreacion;

    @ManyToOne
    private Foro foro;

    @OneToMany(mappedBy = "tema", cascade = CascadeType.ALL)
    @JsonIgnore // https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    private List<Comentario> comentarios;

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
     * @return the titulo
     */
    public String getTitulo() {
        return titulo;
    }

    /**
     * @param titulo the titulo to set
     */
    public void setTitulo(String titulo) {
        this.titulo = titulo;
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
     * @return the fechaCreacion
     */
    public String getFechaCreacion() {
        return fechaCreacion;
    }

    /**
     * @param name the name to set
     */
    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    /**
     * @return the foro
     */
    public Foro getForo() {
        return foro;
    }

    /**
     * @param name the name to set
     */
    public void setForo(Foro foro) {
        this.foro = foro;
    }

    /**
     * @return the comentarios
     */
    public List<Comentario> getComentarios() {
        return comentarios;
    }

    /**
     * @param comentarios the comentarios to set
     */
    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }
}
