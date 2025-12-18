package com.navidam.api.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.navidam.api.dto.request.PersonasRequest;
import com.navidam.api.dto.response.PersonasResponse;

@Service
public interface PersonasService {

    List<PersonasResponse> listPersonas();

    PersonasResponse createPersonas(PersonasRequest request);

    void deletePersonas(Long id);

    
}