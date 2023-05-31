package com.projecao.projeto.todo.resources.exception;

public class DatabaseException extends RuntimeException{
    public DatabaseException(String msg){
        super(msg);
    }
}
