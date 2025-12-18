package com.navidam.api.mapper;

import com.navidam.api.dto.request.PersonasRequest;
import com.navidam.api.dto.response.PersonasResponse;
import com.navidam.api.jpa.entity.PersonasEntity;

public class PersonasMapper {
    
    public static PersonasResponse mapPersonasToPersonasResume(PersonasEntity personasEntity){
        return new PersonasResponse(
            personasEntity.getId(),
            personasEntity.getNombre(),
            personasEntity.getEmail()
        );
    }

    public static PersonasEntity mapPersonasRequestToPersonasEntity(PersonasRequest request) {
        return new PersonasEntity(
            null, 
            request.nombre(),
            request.email()
        );
    }
}

