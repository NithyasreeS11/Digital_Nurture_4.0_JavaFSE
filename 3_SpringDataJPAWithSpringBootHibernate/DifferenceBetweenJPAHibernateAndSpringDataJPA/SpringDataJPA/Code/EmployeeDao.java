package com.cognizant.handson4.dao;


import com.cognizant.handson4.model.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class EmployeeDao {

    private SessionFactory sessionFactory;

    public EmployeeDao() {
        sessionFactory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Employee.class)
                .buildSessionFactory();
    }

    public int addEmployee(Employee employee) {
        Session session = sessionFactory.openSession();
        Transaction tx = null;
        int id = 0;

        try {
            tx = session.beginTransaction();
            id = (int) session.save(employee);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }

        return id;
    }
}
