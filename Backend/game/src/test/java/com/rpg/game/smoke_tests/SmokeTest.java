package com.rpg.game.smoke_tests;

import com.rpg.game.controllers.PlayerController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class SmokeTest {

    @Autowired
    private PlayerController playerController;

    @Test
    public void contextLoads() {
        assertThat(playerController).isNotNull();
    }
}
