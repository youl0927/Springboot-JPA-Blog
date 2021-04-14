package com.cos.blog.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TempControllerTest {

	//http://local:8000/blog/temp/home
	@GetMapping("/temp/home")
	public String tempHome() {
		System.out.println("tempHome");
		//파일리턴 기본경로: src/main/resources/static/home
		//리턴명:/home.htmㅣ <--풀 경로를 입력해야됨
		return "/home.html";
	}
	
	@GetMapping("/temp/jsp")
		public String tempJsp() {
		//prefix: /WEB-INF/views/
		//suffix: jsp
		//v풀네임: /WEB/views/test.jsp
		
			return "test";
		}
}
