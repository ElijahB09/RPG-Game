package com.rpg.game.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "players")
public class PlayerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "health")
    private int health;

    @Column(name = "strength")
    private int strength;

    @Column(name = "defense")
    private int defense;

    @Column(name = "name")
    private String name;
}
