package rs.ac.metropolitan.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.metropolitan.demo.entity.BaseEntity;
import rs.ac.metropolitan.demo.repository.GenericRepository;

import java.util.List;

public class GenericController<T extends BaseEntity> {

    @Autowired
    protected GenericRepository<T> repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<T> getAll() {
        return repository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public T create(@RequestBody T entity) {
        return repository.save(entity);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public T update(@RequestBody T entity) {
        return repository.save(entity);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable(value = "id") long id) {
        repository.deleteById(id);
    }

    @RequestMapping(params = "id",method = RequestMethod.GET)
    public T get(@RequestParam("id") Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("saveAll")
    public String saveAll(@RequestBody List<T> tList) {
        try {
            ResponseEntity.ok(repository.saveAll(tList));
            return HttpStatus.OK.toString();
        } catch (Exception e) {
            return HttpStatus.CONFLICT.toString();
        }
    }

}


