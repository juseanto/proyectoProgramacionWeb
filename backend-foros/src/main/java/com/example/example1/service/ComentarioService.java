package com.example.example1.service;

import com.example.example1.exceptions.NotFoundException;
import com.example.example1.model.Comentario;
import com.example.example1.model.ComentarioRepository;

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
 * ComentarioService
 */
@RestController
@CrossOrigin(origins = "*")
public class ComentarioService {

    @Autowired
    ComentarioRepository repository;

    // imprimir Todos los comentarios
    @GetMapping("/comentario")
    Iterable<Comentario> getComentarios() {
        return repository.findAll();
    }

    // buscar un comentario especifico por ID
    @GetMapping("/comentario/{id}")
    Comentario findComentario(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Comentario not found"));
    }

    // crear un nuevo comentario
    @PostMapping("/comentario")
    Comentario createComentario(@RequestBody Comentario comentario) {
        return repository.save(comentario);
    }

    // modificarInformacionAcercaDeUnComentario
    @PutMapping("/comentario/{id}")
    Comentario updateComentario(@PathVariable Long id, @RequestBody Comentario comentarioData) {

        Comentario comentario = findComentario(id);
        comentario.setContenido(comentarioData.getContenido());
        // comentario.setName(comentarioData.getName());

        // How to update the employer Company?

        return repository.save(comentario);
    }

    // borrar un comentario
    @DeleteMapping("/comentario/{id}")
    void deleteComentario(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}