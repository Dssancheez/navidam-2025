package com.navidam.api.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.navidam.api.dto.request.PersonasRequest;
import com.navidam.api.dto.response.PersonasResponse;
import com.navidam.api.service.PersonasService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class PersonasController {
    
    final private PersonasService personasService;

    @Autowired
    public PersonasController(PersonasService personasService) {
        this.personasService = personasService;
    }

    @GetMapping("personas")
    @ResponseStatus(HttpStatus.OK)
    public List<PersonasResponse> listPersonas(){
        return this.personasService.listPersonas();
    }

    @DeleteMapping("/personas/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePersonas(@PathVariable Long id){
        this.personasService.deletePersonas(id);
    }

    @PostMapping("/personas")
    @ResponseStatus(HttpStatus.CREATED)
    public PersonasResponse createPersonas(@RequestBody PersonasRequest request){
        return this.personasService.createPersonas(request);
    }
}
