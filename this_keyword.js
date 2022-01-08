// var count1 = 1;
// var count2 = 1;

// function counter() {
//     count1++;
//     this.count2++;
//     console.log(this);

//     console.log(count1);
//     console.log(this.count1);

//     console.log(count2);
//     console.log(this.count2);
// }

// counter();
// counter();

function Car(name) {
    this.name = name;
    this.start = function() {
        console.log(this.name);
        console.log(this);
    }
}

/*
// Error because without new keyword, this is pointing to global object
let swift = Car('Swift');
swift.start();
*/

let swift = new Car('Swift');
swift.start();


function Car2(name) {
    this.name = name;
    this.start = function() {
        console.log(this.name);
        console.log(this);
    }
    return this;
}

let suv = Car2('Swift');
suv.start();