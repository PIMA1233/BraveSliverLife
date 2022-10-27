package com.ssafy.BravoSilverLife.controller;

import com.ssafy.BravoSilverLife.service.InfraService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Infra", description = "InfraAPI")
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/infra")
public class InfraController {

    @Autowired
    InfraService infraService;

    @Operation(summary = "동 유동인구 확인", description = "동이름으로 유동인구 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공"),
    })
    @GetMapping("/popular")
    public ResponseEntity getPopular(String name) throws Exception {
        JSONObject population = infraService.getPopular(name);

        if (population != null) return ResponseEntity.status(200).body(population);
        else return ResponseEntity.status(400).body("동 확인");

    }
}
