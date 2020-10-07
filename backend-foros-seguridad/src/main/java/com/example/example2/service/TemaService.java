package com.example.example2.service;

import java.io.Console;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Comentario;
import com.example.example2.model.Tema;
import com.example.example2.model.TemaRepository;

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
    @GetMapping("public/tema")
    Iterable<Tema> getTemas() {
        System.out.println("!!!!!!!!!!!!!!!!! La impresion si funciona ");
        return repository.findAll();
    }

    @GetMapping("public/tema/{id}/comentarios")
    public Iterable<Comentario> findAllComentarios(@PathVariable("id") Long id) {
        // What happens if the company does not exist in the DB?
        return repository.findById(id).get().getComentarios();
    }

    // modificar InformacionAcercaDeUnTema
    @PutMapping("public/tema/{id}")
    Tema updateTema(@PathVariable Long id, @RequestBody Tema temaData) {
        System.out.println("Actualizando un tema!!!!!!!!!!!!!!!!! ");
        Tema tema = findTema(id);
        tema.setTitulo(temaData.getTitulo());
        tema.setContenido(temaData.getContenido());
        tema.setAprobado(temaData.getAprobado());

        return repository.save(tema);
    }

    // buscar un tema especifico por ID
    @GetMapping("public/tema/{id}")
    Tema findTema(@PathVariable Long id) {
        System.out.println("!!!!!!!!!!!!!!!!! Buscando un tema " + id);
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Tema not found"));
    }

    // crear un nuevo tema
    //@PostMapping("user/tema")
    @PostMapping("public/tema")
    Tema createTema(@RequestBody Tema tema) {
        System.out.println("!!!!!!!!!!!!!!!!! Creando un tema " + tema.getId());
        return repository.save(tema);
    }

    // borrar un tema
    @DeleteMapping("public/tema/{id}")
    void deleteTema(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}