let index = {
		init:function(){
			$("#btn-save").on("click", ()=>{	//function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.save();
			});
			$("#btn-delete").on("click", ()=>{	//function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.deleteById();
			});
			$("#btn-update").on("click", ()=>{	//function(){}, ()=>{} this를 바인딩하기 위해서!!
				this.update();
			});
		},

	save:function(){
		//alert('글삭제 save함수 호출 됨');
		let data = {
				title: $("#title").val(),
				content: $("#content").val(),
		};
		
		//console.log(data);
		//ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청
		//ajax 호출시 default가 비동기 호출
		//ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해줌
		$.ajax({
			//회원가입 수행 요청(100초 가정)
			type:"POST",
			url:"/api/board",
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			alert("글쓰기가 완료되었스니다.");
			location.href="/";
		}).fail(function(){
			alert(JSON.stringify(error));
		});	
	},

	

	deleteById:function(){
		alert('글삭제  호출 됨');
		let id= $("#id").text();

		$.ajax({
			//회원가입 수행 요청(100초 가정)
			type:"DELETE",
			url:"/api/board/"+id,
			dataType:"json"
		}).done(function(resp){
			alert("삭제가 완료되었스니다.");
			location.href="/";
		}).fail(function(){
			alert(JSON.stringify(error));
		});	
	},
	
	update:function(){
		let id =$("#id").val();
		//alert('글삭제 save함수 호출 됨');
		let data = {
				title: $("#title").val(),
				content: $("#content").val(),
		};
		
		//console.log(data);
		//ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청
		//ajax 호출시 default가 비동기 호출
		//ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해줌
		$.ajax({
			//회원가입 수행 요청(100초 가정)
			type:"PUT",
			url:"/api/board"+id,
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			alert("글쓰기가 수정되었스니다.");
			location.href="/";
		}).fail(function(){
			alert(JSON.stringify(error));
		});	
	},

		
}
index.init();