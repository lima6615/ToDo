package com.projecao.projeto.todo.dto;

import com.projecao.projeto.todo.entities.Usuario;

import java.io.Serializable;

public class UsuarioDTO implements Serializable {

    private Long id;
    private String nome;
    private String login;
    private String senha;

    public UsuarioDTO(){
    }

    public UsuarioDTO(Usuario entity){
        id = entity.getId();
        nome = entity.getNome();
        login = entity.getLogin();
        senha = entity.getSenha();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
