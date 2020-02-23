"use strict";

//=======================================================
// ARRAYS E VETORES
//=======================================================
var arr = [1, 3, 4, 5, 8, 9]; // const newarr = arr.map(function (item) {
// return item * 2;

var newarr = arr.map(function (item, index) {
  return item * index;
});
console.log(newarr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log('O total do vetor é = ' + sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //=======================================================
// 							CLASSES
//=======================================================
// class TodoList {
// 	constructor() {
// 		this.todos = [];
// 	}
// 	addTodo() {
// 		this.todos.push('Novo Todo');
// 		console.log(this.todos);
// 	}
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
// 	MinhaLista.addTodo();
// }
//=======================================================
// 					HERANÇA E EXTENDS
//=======================================================
// class List {
// 	constructor() {
// 		this.todos = [];
// 	}
// }
// class TodoList extends List{
// 	constructor() {
// 		super();
// 	}
// 	addTodo(){
// 		this.todos.push('Novo Todo');
// 		console.log(this.todos);
// 	}
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
// 	MinhaLista.addTodo();
// }
