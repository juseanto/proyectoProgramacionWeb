package com.example.example2.service;

import javax.servlet.http.HttpSession;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Foro;
import com.example.example2.model.ForoRepository;
import com.example.example2.model.Tema;

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
    @GetMapping("public/foro")
    Iterable<Foro> getForos() {
        return repository.findAll();
    }

    // buscar los temas de un repositorio
    @GetMapping("public/foro/{id}/temas")
    public Iterable<Tema> findAllTemas(@PathVariable("id") Long id) {
        // What happens if the company does not exist in the DB?
        return repository.findById(id).get().getTemas();
    }

    // buscar un foro especifico por ID
    @GetMapping("public/foro/{id}")
    Foro findForo(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Foro not found"));
    }

    // crear un nuevo foro
    @PostMapping("admin/foro")
    Foro createForo(@RequestBody Foro foro) {
        return repository.save(foro);
    }

    // modificarInformacionAcercaDeUnForo
    @PutMapping("user/foro/{id}")
    Foro updateForo(@PathVariable Long id, @RequestBody Foro foroData) {

        Foro foro = findForo(id);
        foro.setName(foroData.getName());
        foro.setDescripcion(foroData.getDescripcion());
        // foro.setName(foroData.getName());

        // How to update the employer Company?

        return repository.save(foro);
    }

    // borrar un foro
    @DeleteMapping("user/foro/{id}")
    void deleteForo(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

    @GetMapping("admin/soyAdmin")
    Boolean soyAdmin() {
        return true;
    }

    @GetMapping("user/soyUser")
    Boolean soyUser() {
        return true;
    }
}