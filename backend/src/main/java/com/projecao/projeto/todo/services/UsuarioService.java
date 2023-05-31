package com.projecao.projeto.todo.services;

import com.projecao.projeto.todo.dto.UsuarioDTO;
import com.projecao.projeto.todo.entities.Usuario;
import com.projecao.projeto.todo.repositories.UsuarioRepository;
import com.projecao.projeto.todo.resources.exception.DatabaseException;
import com.projecao.projeto.todo.services.exception.ResourceExistsException;
import com.projecao.projeto.todo.services.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @Transactional(readOnly = true)
    public UsuarioDTO findById(Long id){
        Optional<Usuario> obj = repository.findById(id);
        Usuario entity = obj.orElseThrow(() -> new ResourceNotFoundException("Resource "+ id + " Not Found"));
        return new UsuarioDTO(entity);
    }

    @Transactional
    public UsuarioDTO insert(UsuarioDTO dto){
        Usuario entity = new Usuario();
        entity.setNome(dto.getNome());
        entity.setLogin(dto.getLogin());
        entity.setSenha(encoder.encode(dto.getSenha()));
        Optional<Usuario> result = repository.findByLogin(dto.getLogin());
        if(!result.isPresent()){
            entity = repository.save(entity);
        }else{
            throw new ResourceExistsException("Resource Already Exists");
        }
        return new UsuarioDTO(entity);
    }

    @Transactional
    public UsuarioDTO update(Long id, UsuarioDTO dto){
        findById(id);
        Usuario entity = new Usuario();
        entity.setId(id);
        entity.setNome(dto.getNome());
        entity.setLogin(dto.getLogin());
        entity.setSenha(encoder.encode(dto.getSenha()));
        entity = repository.save(entity);
        return new UsuarioDTO(entity);
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
