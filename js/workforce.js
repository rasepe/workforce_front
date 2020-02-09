function seeAll() {

//	var personName = document.getElementById("name").value;

	var constructedUrl = "http://localhost:8080/employees/";

	var result;
	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {

			print(data, "result");

		},
		error: function(){
			alert("json not found");
		}
	});


}


function seeRole() {

//	var personName = document.getElementById("name").value;
    var role = document.getElementById("role")[document.getElementById("role").selectedIndex].value;
	var constructedUrl = "http://localhost:8080/employees/role/";

	var result;
	$.ajax({
		type: "GET",
		url: constructedUrl + role,
		success: function(data) {

			print(data, "resultRole");

		},
		error: function(){
			alert("json not found");
		}
	});


}


function addNew() {
	
	var newEmployeeName = document.getElementById("name").value;
	console.log(newEmployeeName);
	
	var newEmployeeRole = document.getElementById("role")[document.getElementById("role").selectedIndex].value;

	var salary;
	
	switch (newEmployeeRole) {
		case "ASSISTANT":
			salary = 1000;
			break;
		case "MANAGER":
			salary = 2000;
			break;
		case "BOSS":
			salary = 3000;
			break;
			
	}
	
	var newEmployee = {
			"name": newEmployeeName,
			"role": newEmployeeRole,
			"salary": salary
	}
	
	
	console.log(newEmployee);


	$.ajax({
			type: "POST",
			 contentType: "application/json",
			 url: "http://localhost:8080/employees",
		        data: JSON.stringify(newEmployee),    
			success: function(data) {
				var returnedData = JSON.parse(data);
				console.log(returnedData);
				alert("Hola soy " + returnedData.name + " y me gusta programar en "+ returnedData.favoriteProgrammingLanguage);
			},
			error: function(){
				alert("json not found");
			}
	});

	
	//  window.location="http://localhost/workforce/index.html";


}












function print(objects, id) {
	var result = "";
	for (var i=0; i<objects.length; i++) {
		result += JSON.stringify(objects[i])+"<br>";
		document.getElementById(id).innerHTML = result;
	}


}

/*$(function() {
	
	

	$('#new').on('submit', function() {

		var hola = $("#new").serialize();
	    
	    $.ajax({
			data: $("#new").serialize(),
			type: "POST",
			url: "http://localhost:8080/employees",
			success: function(data) {
				var returnedData = JSON.parse(data);
				console.log(returnedData);
				alert("Hola soy " + returnedData.name + " y me gusta programar en "+ returnedData.favoriteProgrammingLanguage);
			},
			error: function(){
				alert("json not found");
			}
		});
			

	});













	});*/


