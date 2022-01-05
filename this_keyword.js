var count1 = 1;
var count2 = 1;

function counter() {
    count1++;
    this.count2++;
    console.log(this);
    
    console.log(count1);
    console.log(this.count1);
    console.log(count2);
    console.log(this.count2);
}

counter();
counter();

