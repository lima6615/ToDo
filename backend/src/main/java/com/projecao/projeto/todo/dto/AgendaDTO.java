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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
    private String horario;
    private String local;
    private Boolean concluido;

    public AgendaDTO(){
    }

    public AgendaDTO(Agenda entity){
        id = entity.getId();
        titulo = entity.getTitulo();
        data = entity.getData().toString();
        horario = entity.getHorario().toString();
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public Boolean getConcluido() {
        return concluido;
    }

    public void setConcluido(Boolean concluido) {
        this.concluido = concluido;
    }
}
