let  name = prompt("Как тебя зовут?"); // спрашивает и сохраняет, если что-то вводим и нажимаем ОК.
document.querySelector('h1').addEventListener("click", function(){
    if (name == "bob") {
    this.innerText = "привет боб!";
    this.style.color = "red";
}
else if (name == "noname"){
  this.innerText = "я тебя не знаю!";
  this.style.color = "red";
}
else {
this.innerText = "Меня зовут: " + name;
}
