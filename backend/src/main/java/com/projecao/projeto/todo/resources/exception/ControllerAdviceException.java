package com.projecao.projeto.todo.resources.exception;

import com.projecao.projeto.todo.services.exception.ResourceExistsException;
import com.projecao.projeto.todo.services.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerAdviceException {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<StandardErro> ResourceNotFound(ResourceNotFoundException e, HttpServletRequest request){
        String erro = "Resource Not Found";
        HttpStatus statu = HttpStatus.NOT_FOUND;
        StandardErro  standardErro = new StandardErro(Instant.now(), statu.value(), erro, request.getRequestURI(), e.getMessage());
        return ResponseEntity.status(statu).body(standardErro);
    }

    @ExceptionHandler(ResourceExistsException.class)
    public ResponseEntity<StandardErro> ResourceNotFound(ResourceExistsException e, HttpServletRequest request){
        String erro = "Resource Already exists";
        HttpStatus statu = HttpStatus.BAD_REQUEST;
        StandardErro  standardErro = new StandardErro(Instant.now(), statu.value(), erro, request.getRequestURI(), e.getMessage());
        return ResponseEntity.status(statu).body(standardErro);
    }

    @ExceptionHandler(DatabaseException.class)
    public ResponseEntity<StandardErro> ResourceNotFound(DatabaseException e, HttpServletRequest request){
        String erro = "Database Integration Violation";
        HttpStatus statu = HttpStatus.BAD_REQUEST;
        StandardErro  standardErro = new StandardErro(Instant.now(), statu.value(), erro, request.getRequestURI(), e.getMessage());
        return ResponseEntity.status(statu).body(standardErro);
    }
}
