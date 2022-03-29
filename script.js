function task1_2 (){
    const name = "Justinas";
    const age = 28;
    console.log("==== START of Task 1.2 Log ====");
    console.log("Hi! My name is " + name + " and I'm " + age + " years of age.")
    console.log("==== END of Task 1.2 Log ====");
}

task1_2();

function task1_3 () {
    const array = ['Juozas', 28, "Albinas", "Rimas", 29]
    array.push('Justinas');
    array.unshift(41);
    console.log("==== START of Task 1.3 Log ====");
    console.log(array);
    console.log("==== END of Task 1.3 Log ====");
}

task1_3();


function task1_4() {
    const person = {
        vardas: 'Justinas',
        pavardė: 'Urbutis',
        amžius: 28,
        hobiai: ['krepšinis', 'filmai', 'kelionės'],
        email: '...@gmail.com'
    }
    console.log("==== START of Task 1.4 Log ====");
    console.log(person);
    console.log("==== END of Task 1.4 Log ====");
}

task1_4();

function task1_5() {
    const todos = [
        {
            id: 1,
            text: 'Prisijungti',
            isCompleted: true
        },
        {
            id: 2,
            text: 'Daryti užduotis',
            isCompleted: false
        },
        {
            id: 3,
            text: 'Atsijungti',
            isCompleted: false
        },
    ]
    
    console.log("==== START of Task 1.5 Log ====");

    // For
    for(let i = 0; i < todos.length; i++){
        console.log(todos[i].text);
    }
    
    for(let todo of todos) {
        console.log(todo.text);
    }

    // While
    let i = 0;
    while(i < 2) {
        console.log(`While Loop Number: ${i}`);
        i++
    }
    
    // forEach, map, filter
    todos.forEach(function(todo) {
        console.log(todo.text);
    });
    
    const todoUncompleted = todos.filter(function(todo) {
        return todo.isCompleted === false;
    }).map(function(todo) {
        return todo.text;
    })
    
    console.log(todoUncompleted);

    console.log("==== END of Task 1.5 Log ====")
}

task1_5();

function task1_6(x) {
    if (x === 10) {
        console.log(x + ' yra lygus 10');
    } else if(x > 10) {
        console.log(x + ' yra daugiau negu 10');
    } else {
        console.log( x +' yra mažiau nei 10');
    }
}

console.log("==== START of Task 1.6 Log ====");
task1_6(10);
console.log("==== END of Task 1.6 Log ====");

function task1_7(x, y) {
    if (x < 5 && y < 10) {
        console.log(x + ' ir ' + y + ' yra mažesni už 10');
    } else if(x > 20 || y > 20 ) {
        console.log('Vienas iš skaičių yra didesnis negu 20');
    } else {
        console.log( 'Bloga sąlyga');
    }
}

console.log("==== START of Task 1.7 Log ====");
task1_7(4,8);
console.log("==== END of Task 1.7 Log ====");

function task1_8(manufactore) {
    switch(manufactore) {
        case 'VW':
            console.log('Pasirinktas VW markės automobilis.');
            break;
        case 'Audi':
            console.log('Pasirinktas Audi markės automobilis.');
            break;
        case 'BMW':
            console.log('Pasirinktas BMW markės automobilis.');
            break;
        default:
            console.log('Tokio automobilių markės neturime');
    }
}

console.log("==== START of Task 1.8 Log ====");
task1_8("VW");
console.log("==== END of Task 1.8 Log ====");


function task1_9() {
    //Constructor function
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    Person.prototype.getBirthYear = function () {
        return this.dob.getFullYear();
    };

    Person.prototype.getFullName = function () {
        return `${this.firstName} `;
    };


    // Instantiate object from Constructor
    const person1 = new Person("Antantas", "Antanaitis", "01-14-1994");
    const person2 = new Person("Jonas", "Jonaitis", "01-02-2008");

    console.log("Instantiate object from Constructor");
    console.log(person1.getBirthYear());
    console.log(person2.getFullName());

    // Class 
    class PersonClass {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        getBirthYear() {
            return this.dob.getFullYear();
        }
        getFullName() {
            return `${this.firstName} `;
        }
    }

    // Instantiate object from Constructor
    const person3 = new PersonClass("Antantas", "Antanaitis", "01-14-1994");
    const person4 = new PersonClass("Jonas", "Jonaitis", "01-02-2008");

    console.log("Instantiate object from Class");
    console.log(person4.getBirthYear());
    console.log(person3.getFullName());
}

console.log("==== START of Task 1.9 Log ====");
task1_9();
console.log("==== END of Task 1.9 Log ====");

function task1_10() {
    const heading = document.querySelector('h1');
    const form = document.querySelector('form');
    console.log(heading);
    console.log(form);
}

console.log("==== START of Task 1.10 Log ====");
task1_10();
console.log("==== END of Task 1.10 Log ====");

function task1_11() {
    const heading = document.querySelector('h1');
    const description = document.querySelector('p');
    const form = document.querySelector('form');

    heading.innerText = 'Pavadinimas pakeistas us InnerText';
    description.textContent = 'Hello';
    form.lastElementChild.innerHTML = 'Nebesiųsti';

    console.log(heading);
    console.log(form);
}

console.log("==== START of Task 1.11 Log ====");
task1_11();
console.log("==== END of Task 1.11 Log ====");

function task1_12() {
    const heading = document.querySelector('h1');
    const description = document.querySelector('p');
    const form = document.querySelector('form');

    heading.innerText = 'Pavadinimas pakeistas us InnerText';
    description.textContent = 'Hello';
    form.lastElementChild.innerHTML = 'Nebesiųsti';
    
    console.log(heading);
    console.log(form);
}

console.log("==== START of Task 1.12 Log ====");
task1_12();
console.log("==== END of Task 1.12 Log ====");




