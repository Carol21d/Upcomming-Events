package com.sala78.upcommingevents.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityUser implements UserDetails{

    private User user;

    public SecurityUser(User user) {
        this.user = user;
    }

    public void setPassword(String password){
        this.user.setPassword(password);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        /* System.out.println("holaaaaaa");
        Collection<String> roles = new ArrayList<>();
        System.out.println("aqui voy");
        System.out.println(this.user.getUsername()+"123");


        for (Role role : this.user.getRoles()) {
            System.out.println("sigo por aqui");
           roles.add(role.getRole());
           System.out.println(role.getRole());
        }

        System.out.println("aaaaaa");
        
        return roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()); */
        List<Role> roles = user.getRoles();
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
         System.out.println("paso?");
        for (Role role : roles) {
            System.out.println("entro?");
            authorities.add(new SimpleGrantedAuthority(role.getRole()));
        }
         
        return authorities;
                    
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;

    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
