console.log('test');


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rdmRotate(x){
  document.getElementsByClassName("p" + x)[0].style.transform = "rotate(" + getRandomInt(181) + "deg)";
}

function rdmPos(x, y){
  document.getElementById("animate" + x).style.left = y + getRandomInt(11) + '%';
}

function animation1() {
  let id = null;
  const elem = document.getElementById("animate1");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -900) {
      clearInterval(id);
      rdmRotate(1);
      rdmPos(1, 2);   
      animation1();
    } else {
      pos--;
      elem.style.top = 500 + (pos/3*2) + 'px';
      if(pos > -700){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -700)/200;
      }
    }
  }
}

function animation2() {
  let id = null;
  const elem = document.getElementById("animate2");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -600) {
      clearInterval(id);
      rdmRotate(2);   
      rdmPos(2, 35);
      animation2();
    } else {
      pos--;
      elem.style.top = 300 + (pos/4*3) + 'px';
      if(pos > -400){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -400)/200;
      }
    }
  }
}

function animation3() {
  let id = null;
  const elem = document.getElementById("animate3");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -800) {
      clearInterval(id);
      rdmRotate(3); 
      rdmPos(3, 55);  
      animation3();
    } else {
      pos--;
      elem.style.top = 200 + (pos/5*4) + 'px';
      if(pos > -600){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -600)/200;
      }
    }
  }
}

function animation4() {
  let id = null;
  const elem = document.getElementById("animate4");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -900) {
      clearInterval(id);
      rdmRotate(4);
      rdmPos(4, 85);   
      animation4();
    } else {
      pos--;
      elem.style.top = 500 + (pos/6*5) + 'px';
      if(pos > -700){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -700)/200;
      }
    }
  }
}

function animation5() {
  let id = null;
  const elem = document.getElementById("animate5");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -1100) {
      clearInterval(id);
      rdmRotate(5);
      rdmPos(5, 15);   
      animation5();
    } else {
      pos--;
      elem.style.top = 300 + (pos/7*2) + 'px';
      if(pos > -900){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -900)/200;
      }
    }
  }
}

function animation6() {
  let id = null;
  const elem = document.getElementById("animate6");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -900) {
      clearInterval(id);
      rdmRotate(6);
      rdmPos(6, 50);   
      animation6();
    } else {
      pos--;
      elem.style.top = 350 + (pos/3*1.5) + 'px';
      if(pos > -700){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -700)/200;
      }
    }
  }
}

function animation7() {
  let id = null;
  const elem = document.getElementById("animate7");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == -1000) {
      clearInterval(id);
      rdmRotate(7);
      rdmPos(7, 70);   
      animation7();
    } else {
      pos--;
      elem.style.top = 400 + (pos/5*2) + 'px';
      if(pos > -800){
        elem.style.opacity = 0.00 + -pos/200;
      } else {
        elem.style.opacity = 1.00 - (-pos -800)/200;
      }
    }
  }
}



function animation1a() {
  setTimeout(function(){ animation1() }, 1000);
}

function animation2a() {
  setTimeout(function(){ animation2() }, 600);
}

function animation3a() {
  setTimeout(function(){ animation3() }, 100);
}

function animation5a() {
  setTimeout(function(){ animation5() }, 700);
}

animation1a()

animation2a()

animation3a()

animation4()

animation5a()

animation6()

animation7()