//=============================================
//Exercício 1
//=============================================

// class Usuario {
// 	constructor(e, s) {
// 		this.email = e;
// 		this.senha = s;
// 	}

// 	isAdmin() {
// 		if (this.admin == true) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

// class Admin extends Usuario {
// 	constructor() {
// 		super();
// 		this.admin = true;
// 	}


// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

//=============================================
//Exercíio 2
//=============================================
const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// const idade = usuarios.map(function (idd) {
// 	return idd.idade;
// });

// console.log(idade);

// const emprego = usuarios.filter(function (arr) {
// 	return arr.empresa == "Rocketseat", arr.idade >= 18;
// });

// console.log(emprego);

// const google = usuarios.find(function (arr) {
// 	return arr.empresa == "Google";
// });

// console.log(google);

var ex4 =
	usuarios.
		map(function (user) {
			return user.idade * 2;
		})
		.filter(function (user) {
			return user.idade <= 50;
});

console.log(ex4);