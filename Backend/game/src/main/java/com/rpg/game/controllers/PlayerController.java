package com.rpg.game.controllers;

import com.rpg.game.entities.PlayerEntity;
import com.rpg.game.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/players")
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping
    public ResponseEntity<ArrayList<PlayerEntity>> getAllPlayers() {
        ArrayList<PlayerEntity> allPlayers = new ArrayList<>();
        playerRepository.findAll().forEach(allPlayers::add);
        return ResponseEntity.ok(allPlayers);
    }

    @PostMapping
    public ResponseEntity<PlayerEntity> postPlayer(@RequestBody PlayerEntity player) {
        PlayerEntity savedPlayer = playerRepository.save(player);
        return ResponseEntity.ok(savedPlayer);
    }
}
