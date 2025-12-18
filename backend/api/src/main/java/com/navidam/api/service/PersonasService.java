package com.navidam.api.service;

import java.util.List;

import com.navidam.api.dto.request.PersonasRequest;
import com.navidam.api.dto.response.PersonasResponse;

public interface PersonasService {

    List<PersonasResponse> listPersonas();

    void deletePersonas(Long id);

    PersonasResponse createPersonas(PersonasRequest request);
    
}
