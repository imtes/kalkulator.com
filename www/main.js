var inp = document.getElementById("inp");
var but = document.getElementById("but");
var eroo = document.getElementById("eroo");
var instr = document.getElementById("instr");
var but2 = document.getElementById("but2");
var i = 0;
but2.addEventListener("click",func);
but.addEventListener("click",kl);
function kl(){
  if (inp.value.split(" ").length < 3){
    eroo.innerHTML = "Вы ввели недостоющее количество символов.Если дело не в этом поробуйте вводить елементы через пробел.";
    eroo.style.color="red";
  }
  else if (inp.value.split(" ").length > 3){
    eroo.innerHTML = "Слишком много символов";
    eroo.style.color="red";
  }
  else {
    num1=Number(inp.value.split(" ")[0]);
    num2=Number(inp.value.split(" ")[2]);
    eroo.style.color="blue";
    if (inp.value.split(" ")[1]=="+"){
      eroo.innerHTML="Ответ:"+(num1+num2);
    }
    else if (inp.value.split(" ")[1]=="-"){
      eroo.innerHTML="Ответ:"+(num1-num2);
    }
    else if (inp.value.split(" ")[1]=="*"){
      eroo.innerHTML="Ответ:"+(num1*num2);
    }
    else if (inp.value.split(" ")[1]=="/"){
      eroo.innerHTML="Ответ:"+(num1/num2);
    }
    else {
      eroo.innerHTML="Необработано действие";
      eroo.style.color="red";
    }
  }
}
function func() {
  i++;
  if(i==1){
    but2.innerHTML="Скрыть инструкцию";
    instr.innerHTML="Вводите числа и математический символ через пробел.Пример:12 + 6";
  }else{
    but2.innerHTML="Открыть инструкцию";
    instr.innerHTML="";
    i=0;
  }
}
