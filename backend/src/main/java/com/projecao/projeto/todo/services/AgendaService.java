package com.projecao.projeto.todo.services;

import com.projecao.projeto.todo.dto.AgendaDTO;
import com.projecao.projeto.todo.entities.Agenda;
import com.projecao.projeto.todo.repositories.AgendaRepository;
import com.projecao.projeto.todo.resources.exception.DatabaseException;
import com.projecao.projeto.todo.services.exception.ResourceExistsException;
import com.projecao.projeto.todo.services.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class AgendaService {
    @Autowired
    private AgendaRepository repository;

    @Transactional(readOnly = true)
    public List<AgendaDTO> findALL(){
        List<Agenda> entity = repository.findAll();
        return entity.stream().map(x -> new AgendaDTO(x)).toList();
    }

    @Transactional(readOnly = true)
    public AgendaDTO findById(Long id){
       Optional<Agenda> obj = repository.findById(id);
       Agenda entity = obj.orElseThrow(() -> new ResourceNotFoundException("Resource "+ id + " Not Found"));
       return new AgendaDTO(entity);
    }

    @Transactional
    public AgendaDTO insert(AgendaDTO dto){
        Agenda entity = new Agenda();
        entity.setData(LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")));
        entity.setTitulo(dto.getTitulo());
        Optional<Agenda> result = repository.findByTitulo(dto.getTitulo());
        if(!result.isPresent()){
            entity = repository.save(entity);
        }else{
            throw new ResourceExistsException("Recurso já existe!");
        }
        return new AgendaDTO(entity);
    }

    @Transactional
    public AgendaDTO update(Long id, AgendaDTO dto){
        findById(id);
        Agenda entity = new Agenda();
        entity.setId(id);
        entity.setData(LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")));
        entity.setTitulo(dto.getTitulo());
        entity = repository.save(entity);
        return new AgendaDTO(entity);
    }

    public void delete(Long id){
        try{
            repository.deleteById(id);
        }catch(EmptyResultDataAccessException e){
            throw new ResourceNotFoundException(" Resource Not "+ id + " Not Found");
        }catch(DataIntegrityViolationException e){
            throw new DatabaseException("Integration Violation");
        }
    }
}
