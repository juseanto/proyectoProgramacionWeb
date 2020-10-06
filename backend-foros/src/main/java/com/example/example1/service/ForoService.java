package com.example.example1.service;

import com.example.example1.exceptions.NotFoundException;
import com.example.example1.model.Foro;
import com.example.example1.model.ForoRepository;
import com.example.example1.model.Tema;

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
 * ForoService
 */
@RestController
@CrossOrigin(origins = "*")
public class ForoService {

    @Autowired
    ForoRepository repository;

    // imprimir Todos los foros
    @GetMapping("/foro")
    Iterable<Foro> getForos() {
        return repository.findAll();
    }

    // buscar los temas de un repositorio
    @GetMapping("/foro/{id}/temas")
    public Iterable<Tema> findAllTemas(@PathVariable("id") Long id) {
        // What happens if the company does not exist in the DB?
        return repository.findById(id).get().getTemas();
    }

    // buscar un foro especifico por ID
    @GetMapping("/foro/{id}")
    Foro findForo(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Foro not found"));
    }

    // crear un nuevo foro
    @PostMapping("/foro")
    Foro createForo(@RequestBody Foro foro) {
        return repository.save(foro);
    }

    // modificarInformacionAcercaDeUnForo
    @PutMapping("/foro/{id}")
    Foro updateForo(@PathVariable Long id, @RequestBody Foro foroData) {

        Foro foro = findForo(id);
        foro.setName(foroData.getName());
        foro.setDescripcion(foroData.getDescripcion());
        // foro.setName(foroData.getName());

        // How to update the employer Company?

        return repository.save(foro);
    }

    // borrar un foro
    @DeleteMapping("/foro/{id}")
    void deleteForo(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}