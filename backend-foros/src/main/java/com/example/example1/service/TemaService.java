package com.example.example1.service;

import java.io.Console;

import com.example.example1.exceptions.NotFoundException;
import com.example.example1.model.Comentario;
import com.example.example1.model.Tema;
import com.example.example1.model.TemaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * TemaService
 */
@RestController
@CrossOrigin(origins = "*")
public class TemaService {

    @Autowired
    TemaRepository repository;

    // imprimir Todos los temas
    @GetMapping("/tema")
    Iterable<Tema> getTemas() {
        return repository.findAll();
    }

    @GetMapping("/tema/{id}/comentarios")
    public Iterable<Comentario> findAllComentarios(@PathVariable("id") Long id) {
        // What happens if the company does not exist in the DB?
        return repository.findById(id).get().getComentarios();
    }

    // buscar un tema especifico por ID
    @GetMapping("/tema/{id}")
    Tema findTema(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Tema not found"));
    }

    // crear un nuevo tema
    @PostMapping("/tema")
    Tema createTema(@RequestBody Tema tema) {

        return repository.save(tema);
    }

    // modificarInformacionAcercaDeUnTema
    @PutMapping("/tema/{id}")
    Tema updateTema(@PathVariable Long id, @RequestBody Tema temaData) {

        Tema tema = findTema(id);
        tema.setTitulo(temaData.getTitulo());
        tema.setContenido(temaData.getContenido());

        return repository.save(tema);
    }

    // borrar un tema
    @DeleteMapping("/tema/{id}")
    void deleteTema(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}