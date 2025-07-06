package com.cognizant.handson4;

import com.cognizant.handson4.model.Employee;
import com.cognizant.handson4.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HandsOn4Application implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(HandsOn4Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee emp = new Employee();
        emp.setId(101);
        emp.setName("Nithyasree");
        emp.setDepartment("Engineering");
        emp.setSalary(50000);
        employeeService.addEmployee(emp);
        System.out.println("Employee added via Spring Data JPA.");
    }
}
