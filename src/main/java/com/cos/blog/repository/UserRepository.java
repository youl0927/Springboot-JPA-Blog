package com.cos.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cos.blog.model.User;

//DAO
//자동으로 bean으로 등록이 된다
//@Repository 생략이 가능하다
public interface UserRepository  extends JpaRepository<User, Integer>{
	//JPA Naming 쿼리
	//select * from user where username=1?
	java.util.Optional<User>findByUsername(String username);


}

/*
 * //select * from user where username = ? AND password=?; User
 * findByUsernameAndPassword(String username, String password);
 * 
 * //@Query(value="select * from user where username = ?1 AND password=?2"
 * ,nativeQuery = true) //User login(String username, String password);
*/