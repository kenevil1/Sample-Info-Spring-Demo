package com.example.researchspace.sampleinfo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SamplePageController {
    @RequestMapping("/")
    public String getGreeting() {
        return "Hello World!";
    }
}
