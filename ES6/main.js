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
// const usuarios = [
// 	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//  	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//  	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

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

// const ex4 = usuarios
// 	.map(user => ({ ...user, idade: user.idade * 2}))
// 	.filter(user => user.idade <= 50);

// console.log(ex4);

//=============================================
//Exercíio 3
//=============================================

// 3.1
const arr = [1, 2, 3, 4, 5];

const newarr = arr.map(item => item + 10);

console.log(newarr);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {
	return usuario.idade;
}

console.log(mostraIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
 return { nome, idade };
}

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4

// const promise => ({new Promise => (resolve, reject) resolve())
// });

//I DON'T KNOW!!!!!!!!!!



