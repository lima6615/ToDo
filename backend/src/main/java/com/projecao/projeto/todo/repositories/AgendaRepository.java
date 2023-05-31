package com.projecao.projeto.todo.repositories;

import com.projecao.projeto.todo.entities.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, Long> {
    Optional<Agenda> findByTitulo(String titulo);
}
