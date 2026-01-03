package com.example.demo.model;
import java.util.List;

//import javax.management.Notification;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class user {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long userId;
    private String username;
    private String email;
    private String password;
    private String phno;
    

// @JsonIgnore
//     @OneToMany(mappedBy = "user")
//     private List<Notification> notification;

public Long getUserId() {
    return userId;
}

public void setUserId(Long userId) {
    this.userId = userId;
}

public String getUsername() {
    return username;
}

public void setUsername(String username) {
    this.username = username;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = password;
}

public String getPhno() {
    return phno;
}

public void setPhno(String phno) {
    this.phno = phno;
}



// public List<Notification> getNotification() {
//     return notification;
// }

// public void setNotification(List<Notification> notification) {
//     this.notification = notification;
// }
    
}
