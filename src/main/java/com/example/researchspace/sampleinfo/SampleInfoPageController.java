package com.example.researchspace.sampleinfo;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SampleInfoPageController {
    private final RestTemplate restTemplate;
    private final String tokenAPI;

    public SampleInfoPageController(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
        this.tokenAPI = "cAOg2hQzH0aHpjpB4aLXVjKlICwCsIlz";
    }

    @RequestMapping("/")
    public String getGreeting() throws JSONException {
        return getSamplesPlainJSON();
    }

    // Requests Samples JSON with token
    public String getSamplesPlainJSON() throws JSONException {
        String url = "https://demos.researchspace.com/api/inventory/v1/samples";
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.set("apiKey", tokenAPI);
        HttpEntity request = new HttpEntity(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
        System.out.println(response.getBody());
        return response.getBody();
    }
}
