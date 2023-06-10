package com.projecao.projeto.todo.resources;

import com.projecao.projeto.todo.dto.AgendaDTO;
import com.projecao.projeto.todo.services.AgendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/agendas")
public class AgendaController {
    @Autowired
    private AgendaService service;

    @GetMapping
    public ResponseEntity<List<AgendaDTO>> findAll(){
       List<AgendaDTO> dto = service.findAll();
       return ResponseEntity.ok().body(dto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        AgendaDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<AgendaDTO> insert (@RequestBody AgendaDTO dto){
        dto = service.insert(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable  Long id, @RequestBody AgendaDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value ="/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
