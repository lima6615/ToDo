package com.projecao.projeto.todo.services.exception;

public class ResourceExistsException  extends RuntimeException{
    public ResourceExistsException(String msg){
        super(msg);
    }
}
