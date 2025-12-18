package com.navidam.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.navidam.api.dto.request.PersonasRequest;
import com.navidam.api.dto.response.PersonasResponse;
import com.navidam.api.jpa.entity.PersonasEntity;
import com.navidam.api.jpa.repository.PersonasRepository;
import com.navidam.api.mapper.PersonasMapper;
import com.navidam.api.service.PersonasService;

@Service
public class PersonasServiceImpl implements PersonasService {
    
    final private PersonasRepository personasRepository;

    @Autowired
    public PersonasServiceImpl(PersonasRepository personasRepository){
        this.personasRepository = personasRepository;
    }

    @Override
    public List<PersonasResponse> listPersonas() {
        List<PersonasEntity> personas = this.personasRepository.findAll();
        return personas.stream().map(PersonasMapper::mapPersonasToPersonasResume).toList();
    }

    @Override
    public PersonasResponse createPersonas(PersonasRequest request){
        PersonasEntity personas = PersonasMapper.mapPersonasRequestToPersonasEntity(request);
        PersonasEntity resultado = this.personasRepository.save(personas);
        return PersonasMapper.mapPersonasToPersonasResume(resultado);
    }

    @Override
    public void deletePersonas(Long id) {
        this.personasRepository.deleteById(id);
    }
}

