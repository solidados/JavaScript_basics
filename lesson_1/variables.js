// let admin, name;
// name = 'Василий';
// admin = name;
//
// alert('Нашего Админа тоже зовут ' + admin);

function getAdminsName() {
	// let admin, name;
	let name = document.getElementById("firstName").value;
	let admin = name;
	document.getElementById("adminsName").innerHTML = admin;
	alert('Вот это совпадение! Нашего Админа тоже зовут ' + admin);
}