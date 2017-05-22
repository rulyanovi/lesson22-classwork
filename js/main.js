/*
назва змінної:
	- складається з букв, цифр, символа $ та _
	- не може починатися із цифри
	- не може бути зарезервованим словом
		class, const, enum, export, extends, import, super, mplements, interface, let, package, private, protected, public, static, yield, arguments, eval, abstract, boolean, byte, char, double, enum, export, extends, goto, implements, import, int, native, package, private, protected, static, super, synchronized, throws, class, const, final, float, interface, long, public, short, transient, volatile
	- рекомендується використовувати змістовні назви та camelCase
*/

var num = 20; 							//числовий тип даних - "number"
console.log(num);

var strGreet = "Hello ";				//стрічковий тип - "string"
var strName = "Ruslan";
console.log(strGreet + strName);

var tr = true;							//булевий тип - "boolean"
console.log(typeof(tr));

console.log(typeof(null));				//спеціальне значення null
console.log(typeof(undefined));			//спеціальне значення undefined

console.log("      2" + 5);

console.log("g    2" * 5);

//Масиви

var arr = [1,3,9,6,8];					//масив як різновид object, який призначений для зберігання пронумерованих значень (індекс елемента починається з 0)
console.log(arr[0]);

var arr2 = ["one", "two", "three"];
console.log(arr2[0]);

var arr3 = [ 1, 'Name', { name: 'John' }, true ];
console.log(arr3);


//Функції для роботи з масивами

/*
	pop() - видаляє останній елемент з масиву
	push() - додає елементи в кінець масиву і повертає довжину масиву
	shift() - видаляє з масиву перший елемент
	unshift() - додає елементи на початок масиву
	join() - переводить масив в стрічку (може містити необов'язковий аргумент, що використовується в якості розділювача')
	reverse() - виводить елементи в зворотньому порядку
	slice(index, num) - вибирає з масиву num к-сть елементів, починаючи з порядкового номеру елемента в масиві index
	splice(index, numForDel, newElements) - додає з позиції index елементи, а також може видалити певну к-сть елементів із заданої позиції
*/

arr.push(10, 13, 17); //додає елементи в кінець масиву та повертає довжину

arr.sort(function(a,b){return a - b;}); //порівнюються 2 сусідні елементи
console.log(arr);

//цикл for

var i = 0;

for (var j = 10; j >= i; j--) {
	console.log(j);
};

//гори і полонини (приклад області видимості змінних)

var landscape = function(){
	var result = "";
	var flat = function(size) {
		for (var count = 0; count < size; count++)
			result += "_";
	};

	var mountain = function(size) {
		result += "/";
		for (var count = 0; count < size; count++)
			result += "'";
		result += "\\"
	};

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
};
console.log(landscape());
