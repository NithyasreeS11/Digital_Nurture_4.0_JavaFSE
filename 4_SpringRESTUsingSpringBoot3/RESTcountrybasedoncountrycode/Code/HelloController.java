package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @Autowired
    private ApplicationContext context;

    @Autowired
    private CountryService countryService;

    @RequestMapping("/hello")
    public String sayHello() {
        LOGGER.info("START - sayHello()");
        String response = "Hello World!!";
        LOGGER.info("END - sayHello()");
        return response;
    }

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        Country country = (Country) context.getBean("in"); // Single bean from XML
        LOGGER.info("END - getCountryIndia()");
        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START - getCountry(): {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("END - getCountry(): {}", country);
        return country;
    }
}
