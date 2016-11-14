var express = require('express'); 
var app = express(); 
var PORT = process.env.PORT || 3000; 

var todos = [
	{
		id: 1,
		description: "Finish project",
		completed: false
	},
	{
		id: 2,
		description: "Go to work",
		completed: false
	},
	{
		id: 3,
		description: "Go to school",
		complted: true
	}
];

app.get("/", function(req, res){
	res.send("Todo API Root"); 
}); 

// GET /todos

app.get("/todos", function(req, res){
	res.json(todos); 
});

app.get("/todos/:id", function(req, res){
	var todoId = parseInt(req.params.id); 
	var matchedTodo; 
	//res.send(todos[todoId].description); 
	todos.forEach(function(item){
		if (item.id === todoId){
			matchedTodo = item; 
		}
	});

	if (matchedTodo){
		res.json(matchedTodo); 
	}else{
		res.status(404).send(); 
	}

}); 

app.listen(PORT, function(){
	console.log("Express listening on port " + PORT + "!"); 
});