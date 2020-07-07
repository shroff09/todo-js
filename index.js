 

const input = document.getElementById("inputarea");
const btn = document.getElementById("submit");
const ul = document.querySelector("ul");
const todoitem = document.getElementById("item");
 
/*(function () {
    // let value = input.value;
    console.log("hi ");
    document.write("Hi Mr annonymous");
})();*/


 function length(){
    return input.value.length;
 }
  

function createlist() {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    
    var btn1 = document.createElement('button'); 
    btn1.appendChild(document.createTextNode('delete'));
    btn1.setAttribute("class","delbutton");
    ul.appendChild(btn1);

    function crossout(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",crossout);

    function deletelist() {
        li.remove();
        btn1.remove();
    }
    btn1.addEventListener("click", deletelist,);
    
}



 function addlist(){
     if(length()>0){
         createlist();
     }
     else{
         window.alert("field is empty");
     }
 }
    btn.addEventListener("click", addlist);




