"use strict";

//=======================================================
// OBJECT SHORT SYNTAX
//=======================================================
var nome = "Jairo";
var idade = 24;
var user = {
  nome: nome,
  idade: idade,
  empresa: "Frog Digital"
};
console.log(user); //=======================================================
// TEMPLATE LITERALS
//=======================================================
// const nome = "Jairo";
// const idade = 24;
// console.log(`Meu nome é ${nome} e tenho ${idade} anos!`);
//=======================================================
// Rest e Spread
//=======================================================
//REST
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(...params){
// 	return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 2, 3, 4, 5));
// //SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const user = {
// 	nome: 'Jairo',
// 	idade: 24,
// 	cidade: 'SP',
// };
// const user2 = { ...user, nome: 'Jota'};
// console.log(user);
// console.log(user2);
//=======================================================
// DESESTRUTURAÇÃO
//=======================================================
// const usuario = {
// 	nome: 'Jairo',
// 	idade: 24,
// 	endereco: {
// 		rua: 'Augusto Tolle',
// 		numero: 122,
// 		cidade: 'SP',
// 	},
// };
// // const {nome, idade, endereco: {cidade}} = usuario;
// // console.log(nome);
// // console.log(idade);
// // console.log(cidade);
// function mostraNome({ nome, idade }) {
// 	console.log(nome, idade);
// }
// mostraNome(usuario);
// alert("Teste");
//=======================================================
// VALORES PADRÃO
//=======================================================
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));
// console.log(soma());
//=======================================================
// ARROWS FUNCTIONS
//=======================================================
// const arr = [1, 3, 4, 5, 8, 9];
// // const newarr = arr.map((item) => {
// // 	return item * 2;
// // });
// const newarr = arr.map(item => item * 2);
// console.log(newarr);
//=======================================================
// ARRAYS E VETORES
//=======================================================
// const arr = [1, 3, 4, 5, 8, 9];
// // const newarr = arr.map(function (item) {
// 	// return item * 2;
// const newarr = arr.map(function (item,index) {
// 	return item * index;
// });
// console.log(newarr);
// const sum = arr.reduce(function (total, next){
// 	return total + next;
// });
// console.log('O total do vetor é = ' + sum);
// const filter = arr.filter(function (item){
// 	return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
// 	return item === 4;
// });
// console.log(find);
//=======================================================
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
