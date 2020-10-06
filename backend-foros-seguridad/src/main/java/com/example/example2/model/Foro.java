package com.example.example2.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Foro {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String descripcion;

    // un tema tiene muchos fors
    @OneToMany(mappedBy = "foro", cascade = CascadeType.ALL)
    @JsonIgnore // https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    private List<Tema> temas;

    // @ManyToOne
    // private Usuario moderador;

    // @ManyToOne
    // private Usuario creadorForo;

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
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param name the name to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return the temas
     */
    public List<Tema> getTemas() {
        return temas;
    }

    /**
     * @param temas the temas to set
     */
    public void setTemas(List<Tema> temas) {
        this.temas = temas;
    }

    // /**
    // * @return the moderador
    // */
    // public Usuario getModerador() {
    // return moderador;
    // }

    // /**
    // * @param name the name to set
    // */
    // public void setModerador(Usuario moderador) {
    // this.moderador = moderador;
    // }

    // /**
    // * @return the moderador
    // */
    // public Usuario getCreadorForo() {
    // return creadorForo;
    // }

    // /**
    // * @param name the name to set
    // */
    // public void setCreadorForo(Usuario creadorForo) {
    // this.creadorForo = creadorForo;
    // }

}
