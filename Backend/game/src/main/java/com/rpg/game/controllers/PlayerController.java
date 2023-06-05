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
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ArrayList<PlayerEntity>> getAllPlayers() {
        ArrayList<PlayerEntity> allPlayers = new ArrayList<>();
        playerRepository.findAll().forEach(allPlayers::add);
        return ResponseEntity.ok(allPlayers);
    }

    // Don't really need this
    @GetMapping(params = "playerId")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<PlayerEntity> getPlayerById(@RequestParam Integer playerId) {
        return ResponseEntity.ok(playerRepository.findById(playerId).get());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<PlayerEntity> postPlayer(@RequestBody PlayerEntity player) {
        return ResponseEntity.ok(playerRepository.save(player));
    }
}
