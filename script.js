let counter = 3;
let counter1 = 5;
let counter2 = 8;
function rm(){
    const test = document.getElementById("btnrm");
    test.remove(); 
}

function Counter() {
    counter++;
    document.getElementById('counter').textContent = counter+" petting(s)";
}
function Counter1() {
    counter1++;
    document.getElementById('counter1').textContent = counter1+" petting(s)";
}
function Counter2() {
    counter2++;
    document.getElementById('counter2').textContent = counter2+" petting(s)";
}
function sel() {
    
    var option = document.getElementById("select").value;
    alert("You are looking for a: " + option);
  }