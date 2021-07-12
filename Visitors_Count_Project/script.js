var counter = document.querySelector(".counter");
var visitor = document.querySelector(".visitor");

let count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
  // Calling the setTimeout method as it reaches 1000 visitors.
  else{
      setTimeout(() =>{
        visitor.innerText = "Congrats!🥳🎉You have just hit 1000 visitors!"
    } , 0);
  }
}, 1);
