/* ЗАДАНИЕ #1 */
loop(3, hi.bind('Lev'));

function loop(times = 0, callback = null) {
	if (callback !== null) {
		for (let i = 0; i < times; i++) {
			callback();
		}
	} else return false;
}

function hi() {
	let self = this ? this : 'Man';
	alert('Hi, ' + self + '!');
}

/* ЗАДАНИЕ #2 */
// площадь четырёхугольника
console.log(calculateArea(1,10));

function calculateArea(a,b) {
	let answer = {
		area: a * b,
		figure: a == b ? 'Квадрат' : 'Прямоугольник',
		input: 'сторона a = ' + a + ', сторона b = ' + b
	};

	return answer;
}

/* ЗАДАНИЕ #3 */
class Human {
	constructor() {
		this.name = 'Вася',
		this.age = 16,
		this.dateOfBirth = '23.08.2003'
	}

	displayInfo() {
		return 'Name: ' + this.name + ', age: ' + this.age + ', birth: ' + this.dateOfBirth;
	}
}

class Employee extends Human {
	constructor() {
		super();
		this.salary = 50000,
		this.department = 'backend'
	}

	displayInfo() {
		return super.displayInfo() + ', salary: ' + this.salary + ', department: ' + this.department;
	}
}

let man = new Employee();
console.log(man.displayInfo());