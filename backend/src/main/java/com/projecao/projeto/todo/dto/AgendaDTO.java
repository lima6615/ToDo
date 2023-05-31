package com.projecao.projeto.todo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.projecao.projeto.todo.entities.Agenda;

import java.io.Serializable;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class AgendaDTO implements Serializable {

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private String titulo;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private String data;
    private String descricao;
    private LocalTime horario;
    private String local;
    private Boolean concluido;

    public AgendaDTO(){
    }

    public AgendaDTO(Agenda entity){
        id = entity.getId();
        titulo = entity.getTitulo();
        data = entity.getData().toString();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
