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
    private String respuesta;
    private String fecha;
    private boolean aprobado;
    private int votos;

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
     * @return the respuesta
     */
    public String getRespuesta() {
        return respuesta;
    }

    /**
     * @param respuesta the respuesta to set
     */
    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
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
    
    public String getFecha() 
    { 
        return this.fecha; 
    }
    
    /**
     * @param fecha de creacion
     */
    public void setFecha(String fecha) 
    { 
        this.fecha = fecha; 
    }

    public boolean getAprobado() 
    { 
        return this.aprobado; 
    }
    
    /**
     * @param aprobado de moderacion
     */
    public void setAprobado(boolean aprobado) 
    { 
        this.aprobado = aprobado; 
    }

    public int getVotos() 
    { 
        return this.votos; 
    }
    
    /**
     * @param aprobado de moderacion
     */
    public void setVotos(int votos) 
    { 
        this.votos = votos; 
    }

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
