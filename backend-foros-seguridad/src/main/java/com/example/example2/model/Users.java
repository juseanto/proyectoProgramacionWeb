package com.example.example2.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Users {

    @Id
    @GeneratedValue
    private Long id;

    private String userName;
    private String password;
    private String tipo;

}
