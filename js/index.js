console.log('test');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
console.log(getRandomInt(3));   

function rdmRotate(x){
  document.getElementsByClassName("p" + x)[0].style.transform = "rotate(" + getRandomInt(181) + "deg)";
}


function loopCall(){
  (function loop1() {
    setTimeout(function () {
      // execute script
      rdmRotate(1)
      loop1()
    }, 6500); //6500 = 6500ms = 6.5s
  }());
}

function loopCall2(){
  setTimeout(function(){
    (function loop2() {
      setTimeout(function () {

        rdmRotate(2)
        loop2()
      }, 7000); 
    }());
  }, 5000);
}

function loopCall3(){
  setTimeout(function(){
    (function loop3() {
      setTimeout(function () {

        rdmRotate(3)
        loop3()
      }, 8000); 
    }());
  }, 3000);
}

function loopCall4(){
  setTimeout(function(){
    (function loop4() {
      setTimeout(function () {

        rdmRotate(4)
        loop4()
      }, 7000); 
    }());
  }, 1000);
}

function loopCall5(){
  setTimeout(function(){
    (function loop5() {
      setTimeout(function () {

        rdmRotate(5)
        loop5()
      }, 6500); 
    }());
  }, 3000);
}

function loopCall6(){
  setTimeout(function(){
    (function loop6() {
      setTimeout(function () {

        rdmRotate(6)
        loop6()
      }, 6000); 
    }());
  }, 2000);
}

function loopCall7(){
  setTimeout(function(){
    (function loop7() {
      setTimeout(function () {

        rdmRotate(7)
        loop7()
      }, 9000); 
    }());
  }, 5000);
}

function loopCall8(){
  setTimeout(function(){
    (function loop8() {
      setTimeout(function () {

        rdmRotate(8)
        loop8()
      }, 12000); 
    }());
  }, 2000);
}

loopCall()

loopCall2()

loopCall3()

loopCall4()

loopCall5()

loopCall6()

loopCall7()

loopCall8()
