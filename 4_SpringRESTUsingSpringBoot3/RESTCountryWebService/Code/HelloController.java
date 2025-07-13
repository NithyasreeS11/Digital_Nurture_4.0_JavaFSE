package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @Autowired
    private ApplicationContext context;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        Country country = (Country) context.getBean("in"); // Bean from country.xml
        LOGGER.info("END - getCountryIndia()");
        return country;
    }

    @RequestMapping("/hello")
    public String sayHello() {
        LOGGER.info("START - sayHello()");
        String response = "Hello World!!";
        LOGGER.info("END - sayHello()");
        return response;
    }
}
