var app = angular.module('iToDo',[]);
app.controller('ToDoController', function($scope){
	$scope.appName = 'iToDo List';

	// 数据源-localstorage,websql
	$scope.todos = [
		{id:1,text:"VFC",done:false,time:getNow(),weight:1},
		{id:2,text:"Angular",done:false,time:getNow(),weight:2}
	];

	$scope.addTodo = function(){
		var todo = {
			id:$scope.todos.length+1,
			text:$scope.todoText,
			done:false,
			time:getNow(),
			weight:4
		};

		$scope.todos.push(todo);
		$scope.todoText = '';
	}

	$scope.remove = function(item){
		$scope.todos.splice($scope.todos.indexOf(item), 1);
	}

	$scope.doneAll = function(){
		angular.forEach($scope.todos,function(todo){
			todo.done = $scope.isDoneAll;
		});
	}

	$scope.hasItem = function () {
		return $scope.todos.length;
	}

	$scope.count = function(){
		var count = 0;
		// todo为回调函数的参数，代表一个数组中的项
		angular.forEach($scope.todos,function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	}

	$scope.startEdit = function(item){
		item.edit = true;
		console.log(item.edit);

	}
});

function getNow(){
	var date = new Date();
	return date.toLocaleString();
}
