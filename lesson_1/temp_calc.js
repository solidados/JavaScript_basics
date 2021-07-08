function calculate(opreator,res) {
    var a;
    a = document.getElementById("celsDeg").value;
    b;
    var result = eval(a+opreator+b);
    document.getElementById(res).value = result;
    return result;
  }
  
  function clear() {
    document.getElementById("calc").reset();
  }